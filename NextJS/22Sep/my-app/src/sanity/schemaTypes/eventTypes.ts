import {defineField, defineType} from '../sanity'

export const eventType = defineType({
    name: 'eventType',
    title: 'EventType',
    type: 'document',
    fields: [
      defineField({
        name: 'name',
        type: 'string',
      }),
    ],
  })