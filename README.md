# Payload CMS Import/Export Plugin

A comprehensive Payload CMS plugin that enables seamless import and export of collection data with support for CSV and JSON formats, featuring advanced field mapping, duplicate handling, and batch processing capabilities.

## ✨ Features

- **Multiple Format Support**: Import/export data in CSV and JSON formats
- **Smart Field Mapping**: Automatic field mapping with manual override options
- **Duplicate Handling**: Choose to skip, replace, or update existing records
- **Batch Processing**: Handle large datasets efficiently with job queuing
- **Field Selection**: Choose specific fields to export or import
- **Multi-language Support**: Built-in translations for 30+ languages
- **Preview Mode**: Preview data before importing
- **Error Handling**: Comprehensive error reporting and validation
- **Permission Integration**: Respects Payload's access control system

## 📦 Installation

```bash
npm install payloadcms-import-export-plugin
# or
pnpm add payloadcms-import-export-plugin
# or
yarn add payloadcms-import-export-plugin
```

## 🚀 Quick Start

### 1. Add the Plugin to Your Payload Config

```typescript
import { buildConfig } from 'payload'
import { importExportPlugin } from 'payloadcms-import-export-plugin'

export default buildConfig({
  // ... your existing config
  plugins: [
    importExportPlugin({
      // Enable for all collections
      collections: [], // Empty array means all collections
      
      // Or specify specific collections
      // collections: ['users', 'posts', 'categories']
    }),
  ],
})
```

### 2. Configure Collections (Optional)

You can disable import/export for specific fields by adding custom configuration:

```typescript
import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'textarea',
    },
    {
      name: 'internalId',
      type: 'text',
      custom: {
        'plugin-import-export': {
          disabled: true, // This field won't be available for import/export
        },
      },
    },
  ],
}
```

## 📖 Usage Guide

### Exporting Data

1. **Navigate to Collection**: Go to any collection where the plugin is enabled
2. **Click Export**: Find the "Export" option in the collection list menu
3. **Configure Export**:
   - Select target collection
   - Choose export format (CSV or JSON)
   - Select specific fields (optional)
   - Configure sorting and filtering
4. **Download**: Click "Export" to generate and download your file

#### Export Configuration Options

```typescript
{
  collection: 'posts',           // Target collection
  format: 'csv',                 // 'csv' or 'json'
  fields: ['title', 'content'],  // Specific fields (optional)
  where: { status: 'published' }, // Filter criteria (optional)
  sort: 'createdAt',             // Sort field (optional)
  limit: 1000,                   // Max records (optional)
}
```

### Importing Data

1. **Navigate to Collection**: Go to any collection where the plugin is enabled
2. **Click Import**: Find the "Import" option in the collection list menu
3. **Upload File**: Select your CSV or JSON file
4. **Configure Import**:
   - Select target collection
   - Choose duplicate handling strategy
   - Map fields if needed
5. **Preview**: Review the data preview
6. **Import**: Execute the import process

#### Duplicate Handling Strategies

- **Skip Existing**: Leave existing records unchanged, only add new ones
- **Replace Existing**: Update existing records with new data from the file
- **Create Duplicates**: Always create new records (ignores duplicates)

#### Supported File Formats

**CSV Format:**
```csv
name,email,age,isActive
John Doe,john@example.com,30,true
Jane Smith,jane@example.com,25,false
```

**JSON Format (Array):**
```json
[
  {
    "name": "John Doe",
    "email": "john@example.com",
    "age": 30,
    "isActive": true
  },
  {
    "name": "Jane Smith",
    "email": "jane@example.com",
    "age": 25,
    "isActive": false
  }
]
```

**JSON Format (Single Object):**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30,
  "isActive": true
}
```

## ⚙️ Configuration

### Plugin Options

```typescript
export interface ImportExportPluginConfig {
  /**
   * Collections to enable the plugin for
   * Empty array or undefined means all collections
   */
  collections?: string[]
  
  /**
   * Disable the plugin entirely
   * @default false
   */
  disabled?: boolean
  
  /**
   * Custom export functions for specific field types
   */
  customExportFunctions?: Record<string, ToCSVFunction>
  
  /**
   * Maximum file size for imports (in bytes)
   * @default 10485760 (10MB)
   */
  maxFileSize?: number
  
  /**
   * Enable debug logging
   * @default false
   */
  debug?: boolean
}
```

### Field-Level Configuration

Control import/export behavior at the field level:

```typescript
{
  name: 'sensitiveField',
  type: 'text',
  custom: {
    'plugin-import-export': {
      disabled: true, // Exclude from import/export
      toCSV: (value, field) => {
        // Custom export transformation
        return value ? '***' : ''
      }
    }
  }
}
```

### Custom Export Functions

Define custom export transformations for complex field types:

```typescript
importExportPlugin({
  customExportFunctions: {
    relationship: (value, field) => {
      // Transform relationship fields
      return Array.isArray(value) 
        ? value.map(v => typeof v === 'object' ? v.id : v).join(',')
        : typeof value === 'object' ? value.id : value
    },
    upload: (value, field) => {
      // Transform upload fields
      return typeof value === 'object' ? value.filename : value
    }
  }
})
```

## 🔧 Advanced Usage

### Programmatic Export

```typescript
import { exportCollection } from 'payloadcms-import-export-plugin/rsc'

// Export data programmatically
const exportData = await exportCollection({
  collection: 'posts',
  format: 'json',
  fields: ['title', 'content', 'status'],
  where: { status: 'published' },
  req, // Payload request object
})
```

### Programmatic Import

```typescript
import { importCollection } from 'payloadcms-import-export-plugin/rsc'

// Import data programmatically
const result = await importCollection({
  collection: 'posts',
  data: [
    { title: 'Post 1', content: 'Content 1' },
    { title: 'Post 2', content: 'Content 2' },
  ],
  duplicateHandling: 'skip',
  req, // Payload request object
})

console.log(result) // { imported: 2, updated: 0, skipped: 0, errors: [] }
```

### Error Handling

The plugin provides comprehensive error reporting:

```typescript
{
  success: false,
  imported: 5,
  updated: 2,
  skipped: 1,
  errors: [
    {
      row: 3,
      field: 'email',
      message: 'Email is required',
      value: null
    }
  ],
  processedAt: '2024-01-15T10:30:00Z'
}
```

## 🌐 Internationalization

The plugin includes built-in translations for 30+ languages. To use specific translations:

```typescript
// Import specific language
import { translations } from 'payloadcms-import-export-plugin/translations/languages/en'

// Import all languages
import { allTranslations } from 'payloadcms-import-export-plugin/translations/languages/all'
```

Supported languages include: Arabic, Chinese, English, French, German, Japanese, Spanish, and many more.

## 🔒 Security Considerations

- **File Upload Security**: Only CSV and JSON files are accepted
- **Permission Integration**: Respects Payload's access control system
- **Data Validation**: All imported data goes through Payload's validation
- **Size Limits**: Configurable file size limits prevent abuse
- **Sanitization**: Input data is sanitized before processing

## 🧪 Testing

The plugin includes comprehensive test coverage:

```bash
# Run all tests
pnpm test

# Run integration tests
pnpm test:int

# Run end-to-end tests
pnpm test:e2e
```

## 🐛 Troubleshooting

### Common Issues

**Import fails with "Collection not found":**
- Verify the collection slug is correct
- Ensure you have access permissions to the collection

**CSV parsing errors:**
- Check that your CSV has proper headers
- Ensure consistent column count across all rows
- Verify special characters are properly escaped

**Memory issues with large files:**
- Use smaller batch sizes
- Consider splitting large files into smaller chunks
- Increase Node.js memory limit: `node --max-old-space-size=8192`

**Field mapping issues:**
- Ensure field names in your import file match exactly
- Check for typos in field names
- Verify field types are compatible

### Debug Mode

Enable debug logging for troubleshooting:

```typescript
importExportPlugin({
  debug: true, // Enables detailed logging
})
```

## 📝 Contributing

Contributions are welcome! Please read our contributing guidelines and submit pull requests to our GitHub repository.

### Development Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/payloadcms-import-export-plugin.git

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Run tests
pnpm test
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built for the amazing [Payload CMS](https://payloadcms.com) community
- Inspired by the need for better data migration tools
- Special thanks to all contributors and users

## 📞 Support

- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/yourusername/payloadcms-import-export-plugin/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/yourusername/payloadcms-import-export-plugin/discussions)
- 📖 **Documentation**: [GitHub Wiki](https://github.com/yourusername/payloadcms-import-export-plugin/wiki)

---

**Made with ❤️ for the Payload CMS community**