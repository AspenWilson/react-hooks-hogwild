import React, {useState} from 'react'

function NewPigForm() {

    const [newHog, setNewHog] = useState({
        name:'',
        specialty:'',
        greased: false,
        weight: .05,
        'highest medal achieved': '',
        image: ''
    })

    function handleNewPig (e) {
        setNewHog((currentHog) => ({
            ...currentHog,
            [e.target.name]:e.targer.value
        }))
    }

  return (
    <form> Enter new Hog
            <br></br>
        <label> Name:{' '}
        <input type='text' name='name' value={newHog.name} onChange={handleNewPig} />
        </label>
        <label> Speciality:{' '}
        <input type='text' name='speciality' value={newHog.speciality} />
        </label>
        <label> Greased:{' '}
        <input type='checkbox' name='greased' value={newHog.greased} />
        </label>
        <label> Weight:{' '}
        <input type='number' name='weight' value={newHog.weight}  />
        </label>
        <label> Highest Medal Achieved:{' '}
        <input type='text' name='highest medal achieved' value={newHog['highest medal achieved']}  />
        </label>
        <label> Image:{' '}
        <input type='text' name='image' value={newHog.image}  />
        </label>
        <input type='submit' />
    </form>
  )
}

export default NewPigForm
