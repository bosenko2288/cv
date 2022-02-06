/**
 * @param {String[]} keys
 */
 function removeVowelKeys(keys) {
  
  let check=`qwrtpsdfghjklzxcvbnm`
  let retur=Array()
  for(let i of keys){

    

    for(let t of check){

      //let numCheck=0

      if (i[0]===t){

        retur.push(i)
       
        console.log(retur)

      }



    }

  }
      return(retur)
}
