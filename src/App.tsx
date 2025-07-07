import React, { Fragment, useLayoutEffect } from 'react'
import Navbar from './component/Navbar';
import Sidebar from './component/Sidebar';
import { Box, CircularProgress } from '@mui/material';
import VideoList from './component/VideoList';
import ShortsList from './component/ShortsList';
import { useAppDispatch, useAppSelector } from './hook';
import { searchHandler } from './redux/action/searchAction';

const App = () => {
  const dispatch = useAppDispatch()
  const isLoading = useAppSelector(state => state.search.isLoading);

  useLayoutEffect(() => {
    dispatch(searchHandler("music"))
  }, [])

  return (
    <>
      <Navbar />
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, padding: 2 }}>
          {
            isLoading ?
              <Box display="flex" justifyContent="center" mt={5}>
                <CircularProgress />
              </Box>
              :
              <>
                <ShortsList />
                <VideoList />
              </>
          }
        </Box>
      </Box>
    </>
  )
}

export default App;

