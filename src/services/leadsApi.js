import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const leadApi = createApi({
  reducerPath: 'leadApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:7777/' }),
  endpoints: (builder) => ({ 
      getLeads:builder.query({
        query:()=>({
          url:'',
          headers:{
            "authorization":window.localStorage.getItem("token")
          }
        })
      }),
      getLogin:builder.mutation({
          query:(user)=>({
            url:'/login',
            method:'POST',
            body:user
          })
        }),
      getSignup:builder.mutation({
          query:(user)=>({
            url:'/signup',
            method:'POST',
            body:user
          })
        }),
      getData:builder.mutation({
        query:(lead)=>({
          url:'/addlead',
          method:'POST',
          body:lead,
          headers:{
            "authorization":window.localStorage.getItem("token")
          }
        }),
      }),
      getRemarksById:builder.mutation({
        query:({remarks,id})=>({
          url:`/addremark/${id}`,
          method:'PUT',
          body:remarks,
          headers:{
            "authorization":window.localStorage.getItem("token")
          }
        }),
      }),
      getDelete:builder.mutation({
        query:(id)=>({
          url:`/deletelead/${id}`,
          method:'DELETE',
          body:id,
          headers:{
            "authorization":window.localStorage.getItem("token")
          }
        })
      }),
      getUpdate:builder.mutation({
        query:(id)=>({
          url:`/addremark/${id}`,
          method:"PUT",
          body:id,
          headers:{
            "authorization":window.localStorage.getItem("token")
          }
        })
      }),
      getLeadData:builder.query({
        query:()=>({
          url:'',
          headers:{
            "authorization":window.localStorage.getItem("token")
          }
        })
      }),
      getLeadsById:builder.query({
        query:(id)=>({
          url:`/leaddetails/${id}`,
          headers:{
            "authorization":window.localStorage.getItem("token")
          }
        })
      })
    })
  })


export const {
  useGetLoginMutation,
  useGetSignupMutation,
  useGetLeadsQuery,
  useGetDataMutation,
  useGetDeleteMutation,
  useGetUpdateMutation,
  useGetLeadDataQuery,
  useGetLeadsByIdQuery,
 useGetRemarksByIdMutation
 } = leadApi