function nonFilters(original, notTheWord, anotherWord) {
  const filteredOriginal = original.filter(s => {
    let titleDetail = s.title + s.details
    return !titleDetail.toLowerCase().includes(notTheWord) && !titleDetail.toLowerCase().includes(anotherWord)
  })
  return filteredOriginal
}

export default nonFilters
