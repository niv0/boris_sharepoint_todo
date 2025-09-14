# SharePoint Teams Integration Tool

A Node.js application that automatically creates Microsoft Teams todo items based on content from SharePoint sites.

## Features

- Automatic synchronization of SharePoint list items to Teams todos
- Configurable field mappings between SharePoint and Teams
- OAuth 2.0 authentication for secure access
- Duplicate prevention and change tracking
- Comprehensive error handling and retry logic
- Structured logging and monitoring

## Prerequisites

- Node.js 18+ and npm
- Microsoft 365 tenant with SharePoint and Teams access
- Azure AD app registrations for authentication

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env` and configure your settings
4. Build the project:
   ```bash
   npm run build
   ```

## Usage

```bash
npm start
```

For development:
```bash
npm run dev
```

## Testing

```bash
npm test
```

## Configuration

See `.env.example` for required environment variables.

## License

MIT