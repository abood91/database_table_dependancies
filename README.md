# Abi's Database model challenge submission

TechStack:
- Node JS - TypeScript
- Mocha and Chai
- Test coverage via nyc

### Installing the packages:

```sh
cd database_table_dependancies
npm install
```

### Run:

```sh
npx ts-node app.ts
```

### Usde Different Data:

Either modify database.json file in the data directory or in app.ts import the new data fail:

```typescript
import JSON_DATA from 'lpath_to_json_file.json';
```
and then pass the data object to the function:

```typescript
topological_sort(JSON_DATA);
```


### Testing: 

```sh
npm test
```

### Test coverage: 

```sh
npm run coverage
```

## Improvments:
More testing needed to the data parsing and handling.
