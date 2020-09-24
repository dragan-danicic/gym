

function checkRole(wanted, passed) {
  if (wanted === passed) {
    return true;
  } else {
    return false;
  }
}

module.exports = checkRole
