import houseIcon from '../../assets/icon-house.png';
import selfIcon from '../../assets/icon-self.png';
import investorsIcon from '../../assets/icon-investors.png';

export const loanData = [
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
        products: []
    },
    {
        hashId: 'investors',
        title: 'Investment Property Loans',
        buttonTitle: 'Investors',
        icon: investorsIcon,
        products: []
    }
];
