import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Spell = () => {
  const [spell, setSpell] = useState({ name: '', description: '' })
  const [showDescription, setShowDescription] = useState(false) // Track display
  const url = 'https://hp-api.herokuapp.com/api/spells'

  useEffect(() => {
    const fetchSpell = async () => {
      try {
        // Check if spell data is stored in local storage
        const storedSpell = localStorage.getItem('randomSpell')
        if (storedSpell) {
          setSpell(JSON.parse(storedSpell)) // Use stored data
          return // Early exit if data is retrieved from storage
        }

        // Fetch spell data if not stored
        const response = await axios.get(url)
        const spells = response.data
        const randomSpell = spells[Math.floor(Math.random() * spells.length)]
        setSpell(randomSpell)

        // Store the fetched spell data in local storage
        localStorage.setItem('randomSpell', JSON.stringify(randomSpell))
      } catch (error) {
        console.error('Error fetching spell:', error)
      }
    }

    fetchSpell()
  }, [])

  const toggleContent = () => {
    setShowDescription(!showDescription) // Track the description to hide it or not(replace it with the name of the spell)
  }

  const displayedContent = showDescription ? spell.description : spell.name

  return (
    <div className="spells">
      <h2 className="spell">Spell of the Day:</h2>
      <br />
      <div className="spellContent" onClick={toggleContent}>
        <h2 className="spellHeader">{displayedContent}</h2>
      </div>
    </div>
  )
}

export default Spell
