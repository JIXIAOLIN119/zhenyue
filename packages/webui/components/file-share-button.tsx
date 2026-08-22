import { client } from '@/ui/api/client'
import { Button } from '@/ui/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/ui/components/ui/dialog'
import { Input } from '@/ui/components/ui/input'
import { copyToClipboard } from '@/ui/lib/clipboard'
import { cn } from '@/ui/lib/utils'
import { m } from '@/ui/paraglide/messages.js'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'
import { Check, Loader2, Share2 } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

interface FileShareButtonProps {
  projectId: string
  fileId: string
  fileName?: string
  className?: string
}

export function FileShareButton({ projectId, fileId, fileName, className }: FileShareButtonProps) {
  const navigate = useNavigate()
  const [dialogOpen, setDialogOpen] = useState(false)
  const [shareUrl, setShareUrl] = useState('')
  const [shareId, setShareId] = useState('')
  const [copied, setCopied] = useState(false)

  const { mutate: createShare, isPending } = useMutation({
    mutationFn: async () => {
      const res = await client.api.projects[':projectId'].shares.$post({
        param: { projectId },
        json: { name: fileName?.trim() || m.share_this_file() },
      })
      if (!res.ok) throw new Error('Failed to create share link')
      const share = (await res.json()) as { id: string }

      const assetsRes = await client.api.shares[':shareId'].assets.$post({
        param: { shareId: share.id },
        json: { assetIds: [fileId] },
      })
      if (!assetsRes.ok) throw new Error('Failed to add file to share link')

      return share
    },
    onSuccess: async (share) => {
      const url = `${window.location.origin}/share/${share.id}`
      await copyToClipboard(url)
      setShareId(share.id)
      setShareUrl(url)
      setDialogOpen(true)
      toast.success(m.share_link_created())
    },
    onError: (err) => {
      toast.error(m.error_message({ message: err.message }))
    },
  })

  const handleCopy = async () => {
    await copyToClipboard(shareUrl)
    setCopied(true)
    toast.success(m.link_copied())
    window.setTimeout(() => setCopied(false), 2000)
  }

  const openSettings = () => {
    setDialogOpen(false)
    navigate({
      to: '/projects/$projectId/shares/$shareId',
      params: { projectId, shareId },
    })
  }

  return (
    <>
      <Button
        type="button"
        size="sm"
        variant="secondary"
        className={cn(
          'gap-1.5 bg-background/90 backdrop-blur shadow-sm hover:bg-background',
          className,
        )}
        onClick={() => createShare()}
        disabled={isPending}
      >
        {isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Share2 className="h-4 w-4" />}
        {m.share_this_file()}
      </Button>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{m.share_this_file()}</DialogTitle>
            <DialogDescription>{m.share_file_description()}</DialogDescription>
          </DialogHeader>
          <div className="flex items-center gap-2">
            <Input value={shareUrl} readOnly className="flex-1 text-xs" />
            <Button type="button" className="gap-1.5 shrink-0" onClick={handleCopy}>
              {copied ? <Check className="h-4 w-4" /> : <Share2 className="h-4 w-4" />}
              {m.copy_link()}
            </Button>
          </div>
          <DialogFooter className="gap-2 sm:justify-between">
            <Button type="button" variant="outline" onClick={() => setDialogOpen(false)}>
              {m.close()}
            </Button>
            <Button type="button" onClick={openSettings}>
              {m.open_share_settings()}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
