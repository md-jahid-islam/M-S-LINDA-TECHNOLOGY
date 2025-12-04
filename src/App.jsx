import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeCopmonents from './Components/Home/HomeCopmonents'
import CreateChallan from './Pages/CreateChallan'
import AboutUs from './Pages/AboutUs'
import Dashboard from './Pages/Dashboard'
import Customer from './Pages/Customer'
import SettingsComponents from './Components/Settings/SettingsComponents'
import Invoice from './Pages/Invoice'
import Register from './Pages/Register'
import Layouts from './Components/Layout/Layouts'
import Login from './Pages/Login'
import CreateChalallnComponets from './Components/CreateChalalln1/CreateChalallnComponets'
import CreateBillComponents from './Components/CreateBill/CreateBillComponents'
import RzBillComponents from './Components/RzBill/RzBillComponents'
import RzChalllanComponents from './Components/RzChalllan/RzChalllanComponents'
import RZWritingPadComponets from './Components/RZWritingPad/RZWritingPadComponets'
import RZBillPackginComponents from './Components/RZBillPackgin/RZBillPackginComponents'
import RzChallanPackgingComponents from './Components/RzChallanPackging/RzChallanPackgingComponents'
import AddNewChallanComponents from './Components/AddNewChallan/AddNewChallanComponents'
import AddNewClientComponents from './Components/AddNewClient/AddNewClientComponents'
import ViewAnalyticsComponents from './Components/ViewAnalytics/ViewAnalyticsComponents'
import GenerateReportComponents from './Components/GenerateReport/GenerateReportComponents'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Layout Wrapper Route */}
          <Route path='/' element={<Layouts />}>

            {/* Pages Inside Layout */}
            <Route index element={<HomeCopmonents />} />
            <Route path='CreateChallan' element={<CreateChallan />} />
            <Route path='AboutUs' element={<AboutUs />} />
            <Route path='Dashboard' element={<Dashboard />} />
            <Route path='Customer' element={<Customer />} />
            <Route path='Settings' element={<SettingsComponents />} />
            <Route path='Invoice' element={<Invoice />} />
            <Route path='CreateChalalln1' element={<CreateChalallnComponets />} />
            <Route path='CreateBill' element={<CreateBillComponents />} />
            <Route path='RzBill' element={<RzBillComponents />} />
            <Route path='RzChalllan' element={<RzChalllanComponents />} />
            <Route path='RZWritingPad' element={<RZWritingPadComponets />} />
            <Route path='RZBillPackgin' element={<RZBillPackginComponents />} />
            <Route path='RzChallanPackging' element={<RzChallanPackgingComponents />} />
            <Route path='AddNewChallan' element={<AddNewChallanComponents />} />
            <Route path='AddNewClient' element={<AddNewClientComponents />} />
            <Route path='ViewAnalytics' element={<ViewAnalyticsComponents />} />
            <Route path='GenerateReport' element={<GenerateReportComponents />} />


            <Route path='/Login' element={<Login />} />
            <Route path='/Register' element={<Register />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
 }

 export default App
