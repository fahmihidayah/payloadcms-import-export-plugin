import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { MongoMemoryReplSet } from 'mongodb-memory-server'
import path from 'path'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

// import { testEmailAdapter } from './helpers/testEmailAdapter.js'
// import { seed } from './seed.js'
import { importExportPlugin } from 'payloadcms-import-export-plugin'
import { seed } from './seed.js'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

if (!process.env.ROOT_DIR) {
  process.env.ROOT_DIR = dirname
}

const buildConfigWithMemoryDB = async () => {
  if (process.env.NODE_ENV === 'test') {
    const memoryDB = await MongoMemoryReplSet.create({
      replSet: {
        count: 3,
        dbName: 'payloadmemory',
      },
    })

    process.env.DATABASE_URI = `${memoryDB.getUri()}&retryWrites=true`
  }

  return buildConfig({
    admin: {
      importMap: {
        baseDir: path.resolve(dirname),
      },
    },
    collections: [
      {
        slug: 'posts',
        fields: [
          {
            name : 'title',
            type : 'text',

          },
          {
            name : 'content',
            type : 'richText'
          },
          {
            name : 'tags',
            type : "relationship",
            relationTo : "tags",
            hasMany: true
          },
          {
            name : 'categories',
            label : "Categories",
            
            type : "relationship", 
            relationTo : "categories",
            hasMany: true
          }
        ],
      },

      {
          slug : "announcements",
        
          fields : [
            {
              name : 'title',
              type : "text",
            },
            {
              name : "announcement",
              type: "richText"
            },
            {
              name : 'tags',
              type : "relationship",
              relationTo : "tags",
              hasMany: true
            },
            {
              name : 'categories',
              type : "relationship", 
              relationTo : "categories",
              hasMany: true
            }
          ]
      },
      {
        slug: 'media',
        fields: [],
        upload: {
          staticDir: path.resolve(dirname, 'media'),
        },
      },
      {
        slug : 'categories',
        fields : [
          {
            name : 'name',
            type : 'text'
          },
          {
            name : 'description',
            type : 'text'
          }
        ]
      },
      {
        slug : "tags",
        fields : [
          {
            name : 'title',
            type : 'text'
          },
          {
            name : 'description',
            type : 'text'
          }
        ]
      }
    ],
    db: mongooseAdapter({
      ensureIndexes: true,
      url: process.env.DATABASE_URI || '',
    }),
    editor: lexicalEditor(),
    // email: testEmailAdapter,
    onInit: async (payload) => {
      await seed(payload)
    },
    plugins: [
      importExportPlugin({
        collections: [ 'tags', 'posts', 'announcements', 'categories'] // Only these collections will have import/export functionality
      }),
    ],
    secret: process.env.PAYLOAD_SECRET || 'test-secret_key',
    sharp,
    typescript: {
      outputFile: path.resolve(dirname, 'payload-types.ts'),
    },
  })
}

export default buildConfigWithMemoryDB()
