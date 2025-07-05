import { UnknownAction } from 'redux'
import { RootState } from '../store'
import { ThunkAction } from 'redux-thunk'
import axios, { AxiosResponse } from 'axios';
import { setItem, setLoading } from '../slice/searchSlice';

export const searchHandler =
    (search: string): ThunkAction<Promise<any>, RootState, unknown, UnknownAction> =>
        async dispatch => {
            try {
                dispatch(setLoading(true))
                // Run both requests in parallel
                const [shortsResponse, normalResponse] = await Promise.all([
                    axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${search}+shorts&type=video&maxResults=6&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`),
                    axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${search}&type=video&maxResults=6&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
                ]);
                dispatch(setLoading(false))
                const shortsItems = shortsResponse.data?.items || [];
                const normalItems = normalResponse.data?.items || [];
                if (shortsItems.length || normalItems.length) {
                    dispatch(setItem({ shorts: shortsItems, normal: normalItems }))
                }
                return { shortsResponse, normalResponse };
            } catch (error) {
                console.log(error)
                dispatch(setLoading(false))
            }
        }

