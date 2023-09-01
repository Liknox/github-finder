export function getParsedItemFromLocalStorage(key: string): unknown {
   const item = localStorage.getItem(key)
   if (item) {
      try {
         return JSON.parse(item)
      } catch (error) {
         console.error(`Error parsing item from LocalStorage: ${error}`)
      }
   }
   return null
}