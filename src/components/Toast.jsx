import { useState, useRef, useEffect } from 'react'
import styles from './Toast.module.css'

let showToastGlobal = null

export function useToast() {
  const [toast, setToast] = useState({ msg: '', color: '#6366f1', visible: false })
  const timerRef = useRef(null)

  useToastEffect(setToast, timerRef)

  return toast
}

function useToastEffect(setToast, timerRef) {
  useEffect(() => {
    showToastGlobal = (msg, color = '#6366f1') => {
      setToast({ msg, color, visible: true })
      clearTimeout(timerRef.current)
      timerRef.current = setTimeout(() => setToast(t => ({ ...t, visible: false })), 3500)
    }
    return () => { showToastGlobal = null }
  }, [])
}

export function showToast(msg, color) {
  if (showToastGlobal) showToastGlobal(msg, color)
}

export default function Toast({ toast }) {
  return (
    <div
      className={`${styles.toast} ${toast.visible ? styles.show : ''}`}
      style={{ borderColor: toast.color }}
    >
      {toast.msg}
    </div>
  )
}
