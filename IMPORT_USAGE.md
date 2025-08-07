# CSV and JSON Import Functionality

This plugin now supports importing data from CSV and JSON files into your Payload CMS collections.

## Supported File Formats

### CSV Format
- First row must contain column headers that match your collection field names
- Subsequent rows contain the data
- Auto-parsing of data types (numbers, dates, booleans)
- Example:
```csv
name,email,age,isActive
John Doe,john@example.com,30,true
Jane Smith,jane@example.com,25,false
```

### JSON Format
- Can be a single object or array of objects
- Object keys must match your collection field names
- Example (Array):
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

- Example (Single Object):
```json
{
  "name": "John Doe",
  "email": "john@example.com", 
  "age": 30,
  "isActive": true
}
```

## How to Use

1. **Navigate to any collection** where you have enabled the import-export plugin
2. **Click the "Import" menu item** in the collection list view
3. **Upload your CSV or JSON file** - the format will be automatically detected
4. **Select the target collection** you want to import data into
5. **Choose duplicate handling**:
   - **Skip existing data**: Leave existing records unchanged, only add new ones
   - **Replace existing data**: Update existing records with new data from the file
6. **Click Import** to process the file

## Import Results

After processing, you'll see detailed results including:
- **Success**: Whether the import completed successfully
- **Imported**: Number of new records created
- **Updated**: Number of existing records updated (when using "Replace" option)
- **Skipped**: Number of records skipped (when using "Skip" option)
- **Errors**: Any errors encountered during processing
- **Processed At**: Timestamp of when the import was completed

## Field Mapping

The import process maps file columns/keys to collection fields by name. Make sure your CSV headers or JSON keys match the field names in your Payload collection exactly.

## Duplicate Detection

The system detects duplicates by:
1. First checking for matching `id` fields
2. If no ID match, checking for matching `slug` fields
3. If neither exist, the record is treated as new

## Error Handling

Common errors and solutions:
- **Unsupported file format**: Ensure your file has a `.csv` or `.json` extension
- **No data found in file**: Check that your file contains actual data rows/objects
- **Target collection not found**: Verify the collection exists and you have access
- **Field validation errors**: Ensure your data meets the field validation requirements