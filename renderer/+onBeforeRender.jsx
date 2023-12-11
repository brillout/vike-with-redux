// https://vike.dev/onBeforeRender
export default onBeforeRender

import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { getStore } from './store'
import { PageLayout } from './PageLayout'

async function onBeforeRender(pageContext) {
  const store = getStore()

  const { Page } = pageContext
  const pageHtml = renderToString(
    <Provider store={store}>
      <PageLayout>
        <Page />
      </PageLayout>
    </Provider>
  )

  // Grab the initial state from our Redux store
  const PRELOADED_STATE = store.getState()

  return {
    pageContext: {
      PRELOADED_STATE,
      pageHtml
    }
  }
}
