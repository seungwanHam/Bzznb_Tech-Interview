function epoch_to_ISOString(epoch_seconds) {
  const date = new Date(epoch_seconds * 1000);
  return date.toISOString();
}

module.exports.epoch_to_ISOString = epoch_to_ISOString;
