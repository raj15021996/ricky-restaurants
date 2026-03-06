'use client'
import React, { useRef, useState } from 'react'
import SimpleReactValidator from 'simple-react-validator'
import styles from '@/styles/contact.module.css'
import { defaultForm } from '@/utils/constant'
import { defaultFormType } from '@/utils/types'

export default function ContactForm() {
    const [form, setForm] = useState<defaultFormType>(defaultForm)
    const [, forceUpdate] = useState<number>()
    
    const validator = useRef(
        new SimpleReactValidator({
            autoForceUpdate: { forceUpdate },
            className: styles.error,
        })
    )

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target

        setForm((prev) => ({
            ...prev,
            [name]: name === 'guests' ? Number(value) : value,
        }))

        validator.current.showMessageFor(name)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (validator.current.allValid()) {
            console.log('Form Submitted:', form)

            validator.current.hideMessages()
            setForm(defaultForm)
        } else {
            validator.current.showMessages()
            forceUpdate(1)
        }
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.nameRow}>
                <div className={styles.formGroup}>
                    <label>Name *</label>
                    <div className={styles.nameInputs}>
                        <div>
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First"
                                value={form.firstName}
                                onChange={handleChange}
                            />
                            <p className={styles.error}>
                            {validator.current.message(
                                'firstName',
                                form.firstName,
                                'required|alpha'
                            )}
                            </p>
                        </div>

                        <div>
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last"
                                value={form.lastName}
                                onChange={handleChange}
                            />
                             <p className={styles.error}>
                            {validator.current.message(
                                'lastName',
                                form.lastName,
                                'required|alpha'
                            )}
                             </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.formGroup}>
                <label>Mobile Number *</label>
                <input
                    type="tel"
                    name="mobile"
                    placeholder="+971"
                    value={form.mobile}
                    onChange={handleChange}
                />
                 <p className={styles.error}>
                {validator.current.message(
                    'mobile',
                    form.mobile,
                    'required|phone'
                )}
                 </p>
            </div>

            <div className={styles.formGroup}>
                <label>Email *</label>
                <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                />
                 <p className={styles.error}>
                {validator.current.message(
                    'email',
                    form.email,
                    'required|email'
                )}
                 </p>
            </div>

            <div className={styles.formGroup}>
                <label>Numbers Of Guest *</label>
                <input
                    type="number"
                    name="guests"
                    placeholder="0"
                    value={form.guests}
                    onChange={handleChange}
                />
                 <p className={styles.error}>
                    {validator.current.message(
                        'guests',
                        form.guests,
                        'required|numeric|min:1'
                    )}
                 </p>
            </div>

            <div className={styles.formGroup}>
                <label>Comment or Message</label>
                <textarea
                    name="message"
                    placeholder="Your message here..."
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                />
                 <p className={styles.error}>
                    {validator.current.message(
                        'message',
                        form.message,
                        'max:500'
                    )}
                 </p>
            </div>

            <button type="submit" className={styles.submitBtn}>
                Submit
            </button>
        </form>
    )
}