import React, { createContext, useContext, useMemo } from 'react'
import { CRUDLocale } from '../interfaces'

import { enUS as enUsActionsLocale } from './actions'
import { enUs as enUsPaginationLocale } from '../../ui/Pagination/locales'
import { enUS as enUsFiltersLocale } from '../../filters/locale'
import { enUS as enUsFormLocale } from '../../form/locale'
import { enUs as enUsTableLocale } from '../../ui/Table/locales'

const defaultLocale: CRUDLocale = {
    actions: enUsActionsLocale,
    pagination: enUsPaginationLocale,
    filters: enUsFiltersLocale,
    form: enUsFormLocale,
    table: enUsTableLocale,
}

export const LocaleContext = createContext<CRUDLocale>({ ...defaultLocale })

export const LocaleContextProvider: React.FC<{ value?: Partial<CRUDLocale> }> = ({
    value,
    children,
}) => {
    const contextValue = useMemo(
        () => (value ? { ...defaultLocale, ...value } : { ...defaultLocale }),
        [value],
    )

    return <LocaleContext.Provider value={contextValue}>{children}</LocaleContext.Provider>
}

export function useLocaleProvider() {
    return useContext(LocaleContext)
}
