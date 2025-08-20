import { createDirectus, rest } from '@directus/sdk';

const directus = createDirectus('http://34.171.230.224:8055/').with(rest());

export default directus;
