import { Wrench } from 'lucide-react'
import React from 'react'

const header = () => {
  return (
      <div className="flex items-center justify-center pt-8 pb-4">
        <div className="flex items-center gap-2">
          <div className="bg-primary text-primary-foreground p-2 rounded-lg">
            <Wrench className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">Craftsman</h1>
        </div>
      </div>
  )
}

export default header
