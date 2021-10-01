export class Dependency {
   name!:            string;
   dependencies!:    [] | string[];;
}


export class Database {
   name!:    string;
   columns!: Column[];
}

export class Column {
   name!:        string;
   foreign_key!: null | string;
}

function print_databases(dbs: Array<Database>){
    dbs.forEach(db => {
      console.log(db.name);
    })
 }


function map_dependencies(_data: Array<Database>):any{
   try {
      const dep:any = {};
      _data.map(function(table){
      dep[table.name] = table.columns.filter(function(col) {
         if(col.foreign_key !==null){
         return col;
         }

      }).map(function(col:any) { return col.foreign_key.split('.')[0]; });

   });

   return dep;

   } catch (error:any) {
      throw new Error(error);
      
   }
   
}

   
export function topological_sort(_data:Array<Database>){
   
   try {
      var _dependencies = map_dependencies(_data);
      var _keys = Object.keys(_dependencies);

      var used = new Set();
      var result: string[] = [];
      var items: string[] = [];
      var length: number;
      
      do {
         length = _keys.length;
         items = [];
         _keys = _keys.filter(k => {
            if (!_dependencies[k].every(Set.prototype.has, used)) return true;
            items.push(k);
        });
         result.push(...items);
         items.forEach(Set.prototype.add, used);

      } while (_keys.length && _keys.length !== length)

      if(_keys.length >0){
         var warn_result = [];
         var circular_dependency = [];
         circular_dependency.push(..._keys);
         warn_result.push(...result);
         warn_result.push(..._keys);
         console.warn('Possible result if fixed is: ', warn_result);
         console.warn('Current result is: ', result);
      }
      console.log(result)
      return result;
      
   } catch (error:any) {
      
      throw new Error(error);
      
   }
 }


//topological_sort(Invalid);

module.exports = {
   topological_sort
 };

