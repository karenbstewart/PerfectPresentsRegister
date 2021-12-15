import React, {useState, useEffect} from 'react';
import './GiftForm.css';

const GiftForm = ({people, onCreate})=> {

    const [stateGift, setStateGift ] = useState(
        {
            person: null,
            title:"",
            gift_url:"",
            price:0
        }
    )
    const [selectedPerson, setSelectedPerson] = useState(null)

    const handleChange = function(event){
        let propertyName = event.target.name;
        let copiedGift = {...stateGift}
        copiedGift[propertyName] = event.target.value;
        setStateGift(copiedGift)
    }
    
    const handlePerson = function(event){
        const index = parseInt(event.target.value)
        const selectedPerson = people[index]
        let copiedGift = {...stateGift};
        copiedGift['person'] = selectedPerson
        setStateGift(copiedGift)
        setSelectedPerson(event.target.value)
    }
    
    const handleSubmit = function(event){
        event.preventDefault();
        onCreate(stateGift, selectedPerson);
    }
    
//for editing when there is a gift passed in for a particular person

    // const findPersonIndex = function(){
    //     if(gift){
    //       return people.findIndex(person => gift.person.id === person.id)
    //     } else {
    //       return null;
    //     }
    //   }
    
    // useEffect(()=>{
    //   if(person){
    //     let copiedPerson = {...person}
    //     setStatePerson(copiedPerson)
    // }
    //   }, [person])


    const personOptions = people.map((person, index) => {
        return <option key={index} value={index}>{person.firstName}</option>
    })


    return (
        <>
        <div className='formContainer'>
            <form onSubmit={handleSubmit}>
            <div className='formItems'>
                <select name="person" onChange={handlePerson} defaultValue='select-person'>
                    <option disabled value='select-person'>Select a person</option>
                    {personOptions}
                </select>

                <label for="text">gift : </label>
                <input type="text" placeholder="name of gift" name="title" onChange={handleChange} value={stateGift.title} />
                <label for="text">URL or shop : </label>
                <input type="text" placeholder="address or shop " name="gift_url" onChange={handleChange} value={stateGift.gift_url} />
                <label for="text">price : </label>
                <input type="number" placeholder="price of gift" name="price" onChange={handleChange} value={stateGift.price} />
                
                <button type="submit">Save</button>
            </div>
                
            </form>
        </div>
        </>
    )


} 

export default GiftForm;

