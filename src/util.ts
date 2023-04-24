export function naturalSort(a: string, b: string): number {
    // Split the strings into groups of letters and numbers
    const aGroups: string[] = a.toString().split(/(\d+)/);
    const bGroups: string[] = b.toString().split(/(\d+)/);
  
    // Compare each group separately
    for (let i = 0; i < Math.min(aGroups.length, bGroups.length); i++) {
      const aGroup: string = aGroups[i];
      const bGroup: string = bGroups[i];
  
      if (aGroup !== bGroup) {
        // If one group is a number and the other is not,
        // compare the numbers; otherwise, compare the strings
        const aIsNumber: boolean = !isNaN(parseInt(aGroup, 10));
        const bIsNumber: boolean = !isNaN(parseInt(bGroup, 10));
  
        if (aIsNumber && bIsNumber) {
          return parseInt(aGroup, 10) - parseInt(bGroup, 10);
        } else if (aIsNumber) {
          return -1;
        } else if (bIsNumber) {
          return 1;
        } else {
          return aGroup.localeCompare(bGroup);
        }
      }
    }
  
    // If all groups are equal, compare the lengths of the strings
    return a.length - b.length;
  }
  