import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import HeroSection from '../components/sections/HeroSection.jsx'
import FeaturedArticlesSection from '../components/sections/FeaturedArticlesSection.jsx'
import MissionSection from '../components/sections/MissionSection.jsx'
import JoinAssociationSection from '../components/sections/JoinAssociationSection.jsx'

export default function HomePage() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash === '#join') {
      document.getElementById('join')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [hash])

  return (
    <>
      <HeroSection />
      <FeaturedArticlesSection />
      <MissionSection />
      <JoinAssociationSection />
    </>
  )
}
