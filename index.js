require('datejs');
function combineUsers(...args) {
  let combinedObject={
    users: []
  }
  for(const userArray of args){
    if (!Array.isArray(userArray)) {
      throw new TypeError('All arguments to combineUsers must be arrays of usernames');
    }
    combinedObject.users.push(...userArray);
  }
  combinedObject.merge_date = new Date().toString('M/d/yyyy');

  return combinedObject;
}


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
}