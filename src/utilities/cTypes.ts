import { ICType } from '@kiltprotocol/sdk-js';

export const emailCType: ICType = {
  $schema: 'http://kilt-protocol.org/draft-01/ctype#',
  title: 'Email',
  properties: {
    Email: {
      type: 'string',
    },
  },
  type: 'object',
  $id: 'kilt:ctype:0x3291bb126e33b4862d421bfaa1d2f272e6cdfc4f96658988fbcffea8914bd9ac',
};
