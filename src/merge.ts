//Sorted collection min to max
export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    //Since collection 1 and 2 already sorted min to max, the compared index will start with 0
    //While the collection 3 that sorted max to min, the compared index will start at the last index
    let i = 0, j = 0, k = collection_3.length - 1;
    const result: number[] = [];
    //Loop with the length of all those 3 collections
    while (i < collection_1.length || j < collection_2.length || k >= 0) {
        //Assign the index value if it is not exceed or less than 0 then use that number
        //If not then assign infinity 
        const val1 = i < collection_1.length ? collection_1[i] : Infinity;
        const val2 = j < collection_2.length ? collection_2[j] : Infinity;
        const val3 = k >= 0 ? collection_3[k] : Infinity;
        
        //Number from collection 1 is less that those 2 collection
        if (val1 <= val2 && val1 <= val3) {
            result.push(val1);
            i++;
        } //Number from collection 2 is less that those 2 collection
        else if (val2 <= val1 && val2 <= val3) {
            result.push(val2);
            j++;
        } //Number from collection 3 is less that those 2 collection
        else {
            result.push(val3);
            k--;
        }
    }
  
    return result;
  }
  