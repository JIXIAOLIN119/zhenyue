# ZhenYue CLI

A Command Line Interface (CLI) tool for interacting with your ZhenYue instance.

The CLI allows you to view projects, list folder contents, create folders, upload files and directories, and create new versions of existing files directly from the terminal.

---

## Installation

The CLI package is bundled inside the ZhenYue workspace.

### Environment Setup

Before using the CLI, you must set the following environment variables to authenticate with your ZhenYue instance:

```bash
# The endpoint of your ZhenYue API server (e.g. http://localhost:3000)
export ZHENYUE_API_SERVER="http://localhost:3000"

# Your personal API Token (Generate this in the WebUI via Settings -> Developer tab)
export ZHENYUE_API_KEY="your-developer-api-token"
```

---

## Usage

> [!IMPORTANT]
> **For Bun Users:** Since the package binary contains a `#!/usr/bin/env node` shebang, running `zhenyue-cli` directly will run under Node.js. If you wish to run it using Bun, prefix the command with `bun run --bun` (e.g., `bun run --bun zhenyue-cli project ls`).

Run `zhenyue-cli` or query specific commands:

```bash
zhenyue-cli <command> [arguments] [options]
```

### Commands

#### 1. List Projects

List all projects you have access to. Returns the project ID, name, and its root folder ID.

```bash
zhenyue-cli project ls
```

#### 2. List Directory Contents

List direct children (folders and files) of a parent folder.

```bash
zhenyue-cli ls -p <parentId>
```

- **Options:**
  - `-p`, `--parent <id>`: The parent folder ID (required).

#### 3. Create a New Folder

Create a new folder under a parent folder.

```bash
zhenyue-cli mkdir <name> -p <parentId>
```

- **Options:**
  - `-p`, `--parent <id>`: The parent folder ID (required).

#### 4. Upload Files or Folders

Upload a local file or folder to a target parent folder. File sizes and paths are mapped, and uploads are streamed chunk-by-chunk with a progress bar.

```bash
zhenyue-cli upload <localPath> -p <parentId>
```

- **Options:**
  - `-p`, `--parent <id>`: The parent folder ID (required).

#### 5. Create a New Version of a File

Upload a local file as a new version of an existing asset (which must be a file or a version stack). This wraps the assets into a version stack dynamically on the server.

```bash
zhenyue-cli create-version <localFilePath> -p <parentAssetId>
```

- **Options:**
  - `-p`, `--parent <id>`: The parent asset ID (file or version stack) to version (required).

---

## Development

To run the CLI in development mode inside the repository source code:

```bash
bun run apps/cli/src/index.ts project ls
```
