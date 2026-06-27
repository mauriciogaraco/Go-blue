'use client'

import { useState } from 'react'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [form, setForm] = useState({
    nombre: '',
    edad: '',
    nacionalidad: '',
    pais: '',
  })

  if (!isOpen) return null

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const msg = `¡Hola! Me gustaría reservar una Scuba Experience 🤿\n\n*Nombre:* ${form.nombre}\n*Edad:* ${form.edad} años\n*Nacionalidad:* ${form.nacionalidad}\n*País de residencia:* ${form.pais}\n\n¿Me pueden dar más información sobre disponibilidad y precio?`
    const url = `https://wa.me/5358048174?text=${encodeURIComponent(msg)}`
    window.open(url, '_blank', 'noopener,noreferrer')
    onClose()
    setForm({ nombre: '', edad: '', nacionalidad: '', pais: '' })
  }

  const isValid = form.nombre && form.edad && form.nacionalidad && form.pais

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(10,16,28,0.85)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-2xl p-8"
        style={{
          background: 'linear-gradient(145deg, #1a2e3b 0%, #12192B 100%)',
          border: '1px solid rgba(41,116,121,0.3)',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
          aria-label="Cerrar"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="mb-6 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-ocean/15 mb-3">
            <svg className="w-6 h-6 text-ocean" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
            </svg>
          </div>
          <h3 className="text-xl font-black text-white mb-1">Reservar Scuba Experience</h3>
          <p className="text-gray-400 text-sm">Completa tus datos y te contactamos por WhatsApp</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Field label="Nombre completo" name="nombre" value={form.nombre} onChange={handleChange} placeholder="Tu nombre" />
          <Field label="Edad" name="edad" value={form.edad} onChange={handleChange} placeholder="Tu edad" type="number" min="8" max="99" />
          <Field label="Nacionalidad" name="nacionalidad" value={form.nacionalidad} onChange={handleChange} placeholder="Ej: Colombiana, Española…" />
          <Field label="País de residencia" name="pais" value={form.pais} onChange={handleChange} placeholder="Ej: Colombia, México…" />

          <button
            type="submit"
            disabled={!isValid}
            className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] disabled:opacity-40 disabled:cursor-not-allowed text-white font-black text-base px-6 py-4 rounded-xl transition-all duration-200 mt-2"
          >
            <WaIcon />
            Enviar por WhatsApp
          </button>
        </form>
      </div>
    </div>
  )
}

interface FieldProps {
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  type?: string
  min?: string
  max?: string
}

function Field({ label, name, value, onChange, placeholder, type = 'text', min, max }: FieldProps) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-300 mb-1.5">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        min={min}
        max={max}
        required
        className="w-full bg-white/5 border border-white/10 focus:border-ocean/60 outline-none text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm transition-colors"
      />
    </div>
  )
}

function WaIcon() {
  return (
    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}
