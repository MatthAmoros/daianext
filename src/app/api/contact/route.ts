import { Client } from '@notionhq/client'
import { NextRequest, NextResponse } from 'next/server'

const notion = new Client({ auth: process.env.NOTION_TOKEN })
const DATABASE_ID = process.env.NOTION_DATABASE_ID!

const interestLabels: Record<string, string> = {
  'demostracion': 'Demostración',
  'daia-erp': 'Daia ERP',
  'daia-hub': 'Daia HUB',
  'daia-calidad': 'Daia Calidad',
  'daia-agent': 'Daia Agent',
  'ambos': 'Varios productos',
  'consultoria': 'Consultoría',
  'otro': 'Otro',
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, interest, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      )
    }

    await notion.pages.create({
      parent: { database_id: DATABASE_ID },
      properties: {
        Nombre: {
          title: [{ text: { content: name } }],
        },
        Email: {
          email: email,
        },
        'Teléfono': {
          phone_number: phone || null,
        },
        '¿En qué estás interesado?': {
          select: interest
            ? { name: interestLabels[interest] ?? interest }
            : null,
        },
        Mensaje: {
          rich_text: [{ text: { content: message } }],
        },
      },
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Error al guardar en Notion:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}
