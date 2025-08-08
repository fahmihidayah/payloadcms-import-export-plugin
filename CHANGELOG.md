# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.0] - 2025-08-08

### Changed
- Modified `flattenObject` function to store `relationTo` fields as complete JSON objects instead of separate `relationTo` and `id` columns
- Enhanced export functionality to preserve full relationship data structure

### Technical Details
- Updated export logic in `src/export/flattenObject.ts` to use `JSON.stringify()` for relationTo objects
- Applies to both single and array-based polymorphic relationships

## [1.1.1] - Previous Release
- Initial stable release with comprehensive import/export functionality