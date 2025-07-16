import houseIcon from '../assets/icon-house.png';
import selfIcon from '../assets/icon-self.png';
import investorsIcon from '../assets/icon-investors.png';

export const productsData = [
    {
        hashId: 'home-loan',
        title: 'Home Loan Solutions',
        buttonTitle: 'Home Loan Solutions',
        icon: houseIcon,
        products: [
            {
                title: 'Conventional Loans',
                slogan: 'Long term piece of mind',
                description: [
                    'With a conventional fixed rate mortgage, your monthly principal and interest payment remain the same throughout the life of the loan. Your principal and interest payment is based on your interest rate, loan amount, and the loan term (for example, 15-year or 30-year term). You may pay your mortgage down or pay it off at any time without pre-payment penalty. Choose this option if:',
                    [
                        'You plan to stay in your home long term',
                        'You prefer a consistent mortgage payment for budget planning',
                        'You want peace of mind knowing your principal and interest payment will not change'
                    ],
                    'Shorter term loans, such as a 15-year loan, have added benefits:',
                    [
                        'Lower interest rate',
                        'You will pay off your mortgage faster',
                        'You will pay less total interest over the course of your loan'
                    ]
                ]
            },
            {
                title: 'Government Loans',
                slogan: 'Easier qualification and low or no down payment',
                description: [
                    'Loans backed by a government guarantee, such as FHA, VA or USDA, typically have less stringent qualification and credit requirements and require a lower down payment. In addition to typical closing costs, government loans include an additional cost:',
                    [
                        'FHA loans include an upfront as well as monthly mortgage insurance',
                        'VA loans include an upfront VA funding fee (you may be exempt, call us to find out!)',
                        'USDA loans include a loan guarantee fee'
                    ],
                ]
            },
            {
                title: 'Jumbo Loans',
                slogan: 'Borrow more with no hassle',
                description: [
                    'Jumbo loans are loans with loan amounts that exceed the conforming loan limit which is adjusted every year. They are available with adjustable or fixed loan terms for both purchase and refinance. If you are a veteran, ask us about our VA Jumbo loans.',
                ]
            },
            {
                title: 'Reverse Mortgage Loans',
                slogan: 'Limited credit and income qualifying, monthly mortgage payments not required',
                description: [
                    'Reverse mortgage is a loan for borrowers who are at least 62 years of age and who plan to remain in their primary residence and wish to access their home equity without having to make monthly mortgage payments.',
                    'A reverse mortgage may also be used to purchase a primary residence. Regardless of how long they live in the home or what happens to their home\'s value, the borrower only makes one, initial investment (down payment) towards their home purchase.',
                    'With a reverse mortgage, there are limited qualifying requirements for borrower\'s credit and income. The monthly mortgage payments are not required. The borrower is only responsible for their property taxes, homeowner\'s insurance, Homeowner\'s Association dues and home repair and maintenance.',
                    'Choose this option if:',
                    [
                        'You and your spouse are both at least 62',
                        'You want remain in your home and not be required to make monthly mortgage payments',
                        'You want an open line of credit that you can access in case of need',
                    ]
                ]
            }
        ]
    },
    {
        hashId: 'self-employed',
        title: 'Self-Employed Borrowers',
        buttonTitle: 'Self-Employed Borrowers',
        icon: selfIcon,
        products: [
            {
                title: 'Bank Statement Loan Program',
                description: [
                    'Our bank statement loan programs are tailored to meet the unique needs of self-employed borrowers. These programs use common-sense underwriting based on 12 or 24 months of bank deposits, offering a flexible alternative to traditional income documentation.',
                    'We consider both business and personal bank deposits, as well as W-2 income deposits. Multiple business bank accounts are acceptable, and depending on the type of business, the expense ratio can be as low as 10%. Best of all, profit and loss statements are not required.',
                    'If you\'re a business owner seeking hassle-free home financing, our bank statement program offers the flexibility and simplicity you need to qualify with confidence.'
                ]
            },
            {
                title: 'Profit & Loss Program',
                description: [
                    'Now self-employed borrowers can qualify for loans based on their business Profit & Loss statement. Our Profit & Loss Loan Program is a great solution for business owners with fluctuating seasonal income or cash businesses.',
                ]
            },
            {
                title: 'Asset Depletion Loans / Asset Qualifier Program',
                description: [
                    'Borrowers with great credit, but no steady monthly income, may be able to use their assets to qualify for a mortgage. Compared to asset depletion, the Asset Qualifier program essentially doubles the qualifying monthly income, since the draw period is only 5 years (qualifying assets / 60 months).',
                ]
            }
        ]
    },
    {
        hashId: 'investors',
        title: 'Investment Property Loans',
        buttonTitle: 'Investors',
        icon: investorsIcon,
        products: [
            {
                title: 'DSCR Loans',
                description: [
                    'A Debt Service Coverage Ratio or DSCR loan enables you to qualify based on the cash flow of your investment property. The DSCR ratio is calculated using the lease income compared to the full property housing payment. A DSCR loan offers these great benefits:',
                    [
                        'You may close the loan in the name of your company, for example an LLC, partnership or a corporation',
                        'Your personal income or employment does not need to be analyzed',
                        'Financial reserves are required for the subject property only (unlike conventional loan, there is no reserve requirement for any additional properties you own)'
                    ],
                    'These loans are a great way to build your portfolio of income producing properties. They are easier to qualify for than a conventional loan and require less reserves.'
                ]
            },
            {
                title: 'Fix and Flip Loans',
                description: [
                    'Turn opportunity into profit with our streamlined Fix and Flip financing. These short-term, asset-based loans offer fast access to capital, empowering investors to:',
                    [
                        'Purchase properties quickly',
                        'Fund renovations without delays',
                        'List and sell for a profit — fast'
                    ],
                    'Whether you\'re a seasoned investor or a first-time flipper, our Fix and Flip loans give you the competitive edge you need to succeed in today\'s dynamic real estate market.'
                ]
            },
            {
                title: 'Construction Loans',
                description: [
                    'Our ground-up construction loans are designed to finance the entire building process — from land acquisition to the completion of a brand-new structure. Whether it\'s a dream home or an investment property, building from the ground up requires financing that offers speed, flexibility, and reliability.',
                    'These loans are tailored for experienced builders who meet the following qualifications:',
                    [
                        'Designed for builders with a proven track record (At least three completed new builds, or two builds + one major renovation exceeding $200,000)'
                    ],
                    'Key Highlights:',
                    [
                        'Financing available for land purchase and full construction',
                        '12 and 18-month term options with interest-only payments.',
                        'Streamlined approval process',
                        'Flexible draw schedules'
                    ],
                    'If you are ready to break ground, our construction loans provide the capital and confidence to bring your vision to life—every step of the way.'
                ]
            }
        ]
    }
];
