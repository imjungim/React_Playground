import React, {useState,useEffect} from 'react'
import ContactItem from './ContactItem'
import SearchBox from './SearchBox'
import { useSelector } from 'react-redux';


const ContactList = () => {
  const contact = useSelector(state => state.contactList)
  const keyword = useSelector(state => state.keyword)
  console.log("contact",contact)
  let [filteredList, setFilteredList] = useState([]);
  console.log("filter",filteredList)
  useEffect(() => {
    if (keyword !== '') {
      let list = contact.filter((item) => item.name.includes(keyword));
      setFilteredList(list)
    } else if(keyword == '') {
      setFilteredList(contact)
    }
  },[keyword])

  return (
    <div>
      <SearchBox />
        {filteredList.map((item) => (
          <ContactItem item={item} />
        ))}
    </div>
  )
}

export default ContactList