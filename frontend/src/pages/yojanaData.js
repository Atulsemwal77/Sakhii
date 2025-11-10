export const centralYojanasData = [

    // 1. Central Yojana: Beti Bachao Beti Padhao
    { 
        slug: 'beti-bachao-beti-padhao', 
        title: 'Beti Bachao Beti Padhao', 
        description: 'For girl child protection and education', 
        details: 'This is a flagship scheme of the Central Government aimed at preventing the declining Sex Ratio and promoting the education of girl children across the country. The scheme ensures the safety and education of girls at various stages of their lives. It is a joint effort by three ministries (Health, Women and Child Development, and Education).',
        eligibility: 'The scheme is implemented across the country, and its benefits are available to all girl children primarily through awareness and educational campaigns.',
        benefits: ['Improvement in sex ratio', 'Better access to education', 'Change in social mindset towards girls']
    },

    // 2. Central Yojana: Pradhan Mantri Matru Vandana Yojana
    { 
        slug: 'pradhan-mantri-matru-vandana-yojana', 
        title: 'Pradhan Mantri Matru Vandana Yojana', 
        description: '₹5000 Support For Pregnant Women', 
        details: 'Under this scheme, a cash amount of ₹5,000 is given directly to the bank accounts of pregnant women and lactating mothers upon the birth of their first living child, disbursed in three installments. The aim is to provide partial compensation for wage loss to meet healthcare needs.',
        eligibility: 'All pregnant women and lactating mothers who are not employed by the Central/central Government and who have their first child.',
        benefits: ['Financial assistance of ₹5000 in three installments', 'Improvement in maternal health']
    },

    // 3. Central Yojana: Janani Suraksha Yojana
    { 
        slug: 'janani-suraksha-yojana', 
        title: 'Janani Suraksha Yojana', 
        description: 'For Safe Institutional Deliveries', 
        details: 'The objective of Janani Suraksha Yojana (J.S.Y.) is to reduce maternal and infant mortality rates by promoting institutional delivery among poor pregnant women. Under this scheme, beneficiaries are given cash incentives for giving birth in government hospitals.',
        eligibility: 'All pregnant women belonging to BPL (Below Poverty Line) or SC/ST families.',
        benefits: ['Free delivery at government hospitals', 'Cash incentive (varies by area)']
    },
    
    // 4. Central Yojana: Sukanya Samriddhi Yojana
    { 
        slug: 'sukanya-samriddhi-yojana', 
        title: 'Sukanya Samriddhi Yojana', 
        description: 'For the girl child’s future', 
        details: 'This is a small savings scheme created exclusively for the girl child. It encourages parents to build a fund for their education and marriage expenses. It offers a high and assured tax-free return.',
        eligibility: 'Any girl child under the age of 10 can have an account opened in her name. A maximum of two accounts per family.',
        benefits: ['High interest rate', 'Tax benefits under Section 80C', 'Financial security for the girl\'s higher education and marriage']
    }
];

export const stateYojanasData = [
    // 1. State Yojana: Majhi Kanya Bhagyashree 
    { 
        slug: 'majhi-kanya-bhagyashree', 
        title: 'Majhi Kanya Bhagyashree', 
        description: 'Financial assistance for girl child education', 
        details: 'This scheme by the Maharashtra Government encourages the birth of a girl child and provides financial assistance to her parents. The scheme focuses on discouraging sex selection and promoting the education and health of girls.',
        eligibility: 'Residents of Maharashtra state whose first or second child is a girl.',
        benefits: ['Fixed Deposit established in the girl\'s name', 'Scholarship for education']
    },
    
    // 2. State Yojana: Manodhairya Yojana 
    { 
        slug: 'manodhairya-yojana', 
        title: 'Manodhairya Yojana', 
        description: 'Support for survivors of sexual assault', 
        details: 'This scheme was launched by the Maharashtra Government to provide comprehensive financial, medical, and emotional support to victims of sexual assault, acid attacks, and child sexual abuse. The primary focus is on immediate relief and long-term rehabilitation.',
        eligibility: 'Women and children who are victims of sexual offenses, acid attacks, or child abuse in Maharashtra state, and who have lodged a police complaint.',
        benefits: ['Financial compensation up to certain limits (e.g., ₹2,00,000 to ₹5,00,000)', 'Free medical treatment and counselling', 'Legal aid and rehabilitation services']
    },
    
    // 3. State Yojana: Savitribai Phule Scholarship 
    { 
        slug: 'savitribai-phule-scholarship', 
        title: 'Savitribai Phule Scholarship', 
        description: 'For girls from marginalized communities', 
        details: 'Named after the pioneer of female education in India, this scheme is run by the Maharashtra state government to support girls from Schedule Caste (SC) and other marginalized communities. The goal is to provide financial assistance to overcome economic barriers, ensuring girls complete their schooling and higher education without interruption.',
        eligibility: 'Female residents of Maharashtra state belonging to SC, ST, or other specific backward classes, and studying in government-recognized schools/colleges.',
        benefits: ['Monthly scholarship/stipend for books and educational expenses', 'Reducing the dropout rate among girls', 'Promoting gender equality in education']
    }
];
export  const allYojanas = [...centralYojanasData, ...stateYojanasData];