export interface _Formdata {
    doc: string;
    surveys:  Survey[]
}

export interface Survey {
    name: number,
    question: string,
    questiontype: string,
    label: string,
    placeholder: string
    // validate: boolean
}

export const Formdata = (): _Formdata => {
    return {
        doc: 'https://docs.google.com/forms/d/e/1FAIpQLSfhiwi5QYOYm_nJo4SN2btj_II7-tU2EZlA8nXb2-wlHupW5Q/viewform',
        surveys: [
            {
                name: 258860309,
                question: 'メールアドレス',
                questiontype: 'text',
                label: 'email',
                placeholder: 'abcde@example.com'
                // validate: 'required|email'
            },
            {
                name: 971087384,
                question: '氏名',
                questiontype: 'text',
                label: 'username',
                placeholder: '山田太郎'
                // validate: true
            },
            {
                name: 971087384,
                question: '氏名(カナ)',
                questiontype: 'text',
                label: 'username',
                placeholder: 'ヤマダタロウ'
                // validate: true
            },
            {
                name: 989251126,
                question: '電話番号',
                questiontype: 'text',
                label: 'phoneNumber',
                placeholder: '0123456789'
                // validate: 'required|numeric'
            },
            {
                name: 989251126,
                question: 'お問い合わせ内容',
                questiontype: 'textarea',
                label: 'naiyou',
                placeholder: '〜の件'
                // validate: 'required|numeric'
            }
        ]
    };
};
