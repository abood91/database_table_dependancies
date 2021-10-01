import JSON_data from './data/database.json';
import JSON_data2 from './data/database2.json';

import { topological_sort } from './src/dependenator';

topological_sort(JSON_data);

topological_sort(JSON_data2);
