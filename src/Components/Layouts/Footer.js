import React from 'react'
import { Paper, Tabs } from 'material-ui'
import { Tab } from 'material-ui/Tabs'

export default props =>
  <Paper square>
    <Tabs
      value={0}
      indicatorColor="primary"
      textColor="primary"
      centered
    >
      <Tab label="Menu 1" />
      <Tab label="Menu 2" disabled />
      <Tab label="Menu 3" />
    </Tabs>
  </Paper>
