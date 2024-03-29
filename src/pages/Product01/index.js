import React, { useState } from 'react';
import { format, utcToZonedTime } from 'date-fns-tz';
import { FaEye } from 'react-icons/fa';
// -----------------------------------------------------------------------------
import SearchBar from '../../components/Searchbar'
import CategoryMenu from '../../components/CategoryMenu'
import sort from '../../utils/sort'
import sortSurya from '../../utils/sortSurya';
import SubDivision from '../../components/SubDivision';

import cremerData from '../../items/itemsCremer/cr-acido.html.json'
import speedData from '../../items/itemsSpeed/sp-acidos+fosforicos.json'
// import onlyData from '../../items/itemsOnly/on-condicionadores-acidos.json'
import ciaData from '../../items/itemsCia/ci-acido.json'
import suryaData from '../../items/itemsSurya/su-acidos.html.json'
// -----------------------------------------------------------------------------
export default function Dashboard() {

  let sortedCremerData = sort(cremerData)
  let sortedSpeedData = sort(speedData)
  // let sortedOnlyData = sort(onlyData)
  let sortedCiaData = sort(ciaData)
  let sortedSuryaData = sortSurya(suryaData)

  const [input, setInput] = useState('');
  const [ cremer, setCremer ] = useState(sortedCremerData);
  const [ cremerListDefault ] = useState(sortedCremerData);
  const [ speed, setSpeed ] = useState(sortedSpeedData);
  const [ speedListDefault ] = useState(sortedSpeedData);
  // const [ only, setOnly ] = useState(sortedOnlyData);
  // const [ onlyListDefault ] = useState(sortedOnlyData);
  const [ cia, setCia ] = useState(sortedCiaData);
  const [ ciaListDefault ] = useState(sortedCiaData);
  const [ surya, setSurya ] = useState(sortedSuryaData);
  const [ suryaListDefault ] = useState(sortedSuryaData);

  const updateInput = async (input) => {
    const filteredCremer = cremerListDefault.filter(c => {
      let titleDetail = c.title + c.details
      // console.log(titleDetail)
      return titleDetail.toLowerCase().includes(input.toLowerCase())
    })
    const filteredSpeed = speedListDefault.filter(s => {
      let titleDetail = s.title + s.brand + s.details
      return titleDetail.toLowerCase().includes(input.toLowerCase())
    })
    // const filteredOnly = onlyListDefault.filter(s => {
    //   let titleDetail = s.title + s.brand + s.details
    //   return titleDetail.toLowerCase().includes(input.toLowerCase())
    // })
    const filteredCia = ciaListDefault.filter(s => {
      let titleDetail = s.title + s.brand + s.details
      return titleDetail.toLowerCase().includes(input.toLowerCase())
    })
    const filteredSurya = suryaListDefault.filter(s => {
      let titleDetail = s.title + s.brand + s.details
      return titleDetail.toLowerCase().includes(input.toLowerCase())
    })
    setInput(input);
    setCremer(filteredCremer);
    setSpeed(filteredSpeed);
    // setOnly(filteredOnly);
    setCia(filteredCia);
    setSurya(filteredSurya);
  }

  function convertedDate(date) {
    const spTimeZone = 'America/Sao_Paulo'
    const spDate = utcToZonedTime(date, spTimeZone)
    const stringifiedSpDate = JSON.stringify(format(spDate, 'dd/MM/yyyy HH:mm:ssXXX', { timeZone: 'America/Sao_Paulo'}))
    return stringifiedSpDate;
  }

  //----------------------------------------------------------------------------
  return (
    <div className="container">      
      <CategoryMenu activeProp={1}/>  
      <header className="header">
        <div className="search-bar-div">
          <SearchBar input={input} onChange={updateInput} />
        </div>
        <h1 className="logo"><FaEye/>Cyclops Dental</h1>
      </header>

      <div className="videos">
        <SubDivision arrayName={cremer} convertedDate={convertedDate} 
          title={'dentalcremer.com.br'} titlePageLink={'http://www.dentalcremer.com.br/'}
        />
        <SubDivision arrayName={speed} convertedDate={convertedDate} 
          title={'dentalspeed.com'} titlePageLink={'http://www.dentalspeed.com/'}
        />
        <SubDivision arrayName={surya} convertedDate={convertedDate} 
          title={'suryadental.com.br'} titlePageLink={'http://www.suryadental.com.br/'}
        />
        {/* <SubDivision arrayName={only} convertedDate={convertedDate} 
          title={'onlydental.com.br'} titlePageLink={'http://www.onlydental.com.br/'}
        /> */}
        <SubDivision arrayName={cia} convertedDate={convertedDate} 
          title={'dentalecia.com.br'} titlePageLink={'http://www.dentalecia.com.br/'}
        />
      </div>
      

    </div>
  );
}
