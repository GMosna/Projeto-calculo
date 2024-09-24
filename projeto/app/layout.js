export const metadata = {
    title: 'next.js',
    description: 'Gerado por Next.js'
};

export default function RootLayout({ Criança}) {
    return(
        <html lang ="pt-br">
            <body>
                {Criança}
            </body>
        </html>
    );
}