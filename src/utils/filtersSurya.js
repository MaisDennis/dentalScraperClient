function filters(original, filterWord, anotherWord) {
  const filteredOriginal = original.filter(s => {
    let titleDetail = s.title
    return titleDetail.toLowerCase().includes(filterWord) || titleDetail.toLowerCase().includes(anotherWord) 
  })
  return filteredOriginal
}

export default filters
