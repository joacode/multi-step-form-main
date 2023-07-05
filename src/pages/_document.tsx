/* eslint-disable @next/next/no-css-tags */
import React from 'react'
import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentInitialProps,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document {
    static async getInitialProps(ctx: any): Promise<DocumentInitialProps> {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = (): void =>
                originalRenderPage({
                    enhanceApp:
                        (App: any) => (props: React.JSX.IntrinsicAttributes) =>
                            // eslint-disable-next-line react/jsx-props-no-spreading
                            sheet.collectStyles(<App {...props} />),
                })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            }
        } finally {
            sheet.seal()
        }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="manifest" href="/manifest.json" />
                    <link rel="apple-touch-icon" href="/favicon.ico" />
                    <meta name="theme-color" content="#fff" />
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        rel="stylesheet"
                        href="https://use.typekit.net/uot6kmc.css"
                    />
                    <link rel="stylesheet" href="/styles/styles.css" />
                    <link rel="stylesheet" href="/styles/globals.css" />
                    <link rel="manifest" href="/manifest.json" />
                    <link rel="apple-touch-icon" href="/favicon.ico" />
                    <link
                        rel="stylesheet"
                        href="/_next/static/css/pages/_app.css?v5.17.0"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
