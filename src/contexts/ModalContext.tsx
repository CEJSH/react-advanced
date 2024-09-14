import {
  ComponentProps,
  createContext,
  useCallback,
  useContext,
  useMemo,
} from 'react'
import { createPortal } from 'react-dom'

import Modal from '@/components/shared/Modal'
import { useState } from 'react'

type ModalProps = ComponentProps<typeof Modal>
// modalprops에서 open이 제외된 타입
type ModalOptions = Omit<ModalProps, 'open'>

interface ModalContextValue {
  open: (options: ModalOptions) => void
  close: () => void
}

const Context = createContext<ModalContextValue | undefined>(undefined)

const defaultValues: ModalProps = {
  open: false,
  body: null,
  onRightButtonClick: () => {},
  onLeftButtonClick: () => {},
}

const $portal_root = document.getElementById('root-portal')

export default function ModalContext({
  children,
}: {
  children: React.ReactNode
}) {
  const [modalState, setModalState] = useState<ModalProps>(defaultValues)

  const open = useCallback((options: ModalOptions) => {
    setModalState({ ...options, open: true })
  }, [])

  const close = useCallback(() => {
    setModalState(defaultValues)
  }, [])

  const values = useMemo(
    () => ({
      open,
      close,
    }),
    [open, close],
  )

  return (
    <Context.Provider value={values}>
      {children}
      {$portal_root != null
        ? createPortal(<Modal {...modalState} />, $portal_root)
        : null}
    </Context.Provider>
  )
}

export function useModalContext() {
  const values = useContext(Context)

  if (values == null) throw new Error('ModalContext 안에서 사용해 주세요')
  return values
}
