// https://vike.dev/onRenderClient
export default onRenderClient

import React from 'react'
import { hydrateRoot, createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { PageLayout } from './PageLayout'
import { getStore } from './store'

// this example has client-side routing enabled ( see `+config.h.js` )
// for SSR only you can disable both `clientRouting` and `hydrationCanBeAborted`

let root
// store is initialized only once on the client, so it can persist between client-side navigations
let store = null
async function onRenderClient(pageContext) {
  const { Page } = pageContext

  // If we use Client Routing, then we should initialize the store only once
  // (See https://vike.dev/server-routing-vs-client-routing for more information about Client Routing and Server Routing.)
  if (!store) {
    store = getStore(pageContext.PRELOADED_STATE)
  }

  const page = (
    <Provider store={store}>
      <PageLayout>
        <Page />
      </PageLayout>
    </Provider>
  )

  const container = document.getElementById('react-root')
  if (pageContext.isHydration) {
    root = hydrateRoot(container, page)
  } else {
    if (!root) {
      root = createRoot(container)
    }
    root.render(page)
  }
}
