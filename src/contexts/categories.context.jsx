import { createContext, useState, useEffect } from 'react'
import SHOP_DATA from '../shop-data.js'
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils'

export const CategoriesContext = createContext({
  categoriesMap: {},
})

export const CategoriesProvider = ({ children }) => {
  useEffect(() => {
    const getCategories = async () => {
      const categoryMap = await getCategoriesAndDocuments()
      // console.table(categoryMap)
      setCategoriesMap(categoryMap)
    }
    getCategories()
  }, [])
  const [categoriesMap, setCategoriesMap] = useState([])
  const value = { categoriesMap }
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  )
}
