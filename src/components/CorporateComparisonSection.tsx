import { useMemo, useState } from 'react';
import {
  CorporateCompanyProfile,
  CorporateComparisonRow,
  CorporateTrainingProgram,
} from '../types/corporateBenchmark';

interface CorporateComparisonSectionProps {
  companies: CorporateCompanyProfile[];
  comparisonRows: CorporateComparisonRow[];
  programs: CorporateTrainingProgram[];
  onSelectProgram: (program: CorporateTrainingProgram) => void;
}

export function CorporateComparisonSection({
  companies,
  comparisonRows,
  programs,
  onSelectProgram,
}: CorporateComparisonSectionProps) {
  const [selectedCompany, setSelectedCompany] = useState<string>('ALL');

  const programMap = useMemo(() => {
    const map = new Map<string, CorporateTrainingProgram>();
    for (const p of programs) map.set(p.id, p);
    return map;
  }, [programs]);

  const filteredRows = useMemo(() => {
    if (selectedCompany === 'ALL') return comparisonRows;
    return comparisonRows.filter((row) => {
      const prog = programMap.get(row.programId);
      return prog?.companyId === selectedCompany;
    });
  }, [comparisonRows, programMap, selectedCompany]);

  const renderCell = (text: string) => {
    const isMissing = text.toLowerCase().startsWith('tidak ditemukan');
    return (
      <span
        className={`text-xs leading-relaxed block ${
          isMissing ? 'text-[#94A39B] italic' : 'text-[#31403A]'
        }`}
      >
        {text}
      </span>
    );
  };

  return (
    <div className="space-y-8">
      <section className="space-y-3 max-w-4xl">
        <div className="flex flex-wrap items-center gap-2 text-xs text-[#4B5953]">
          <span>Sheet 3 Workbook Excel</span>
          <span aria-hidden="true">·</span>
          <span>16 Dimensi Perbandingan Lintas Perusahaan</span>
          <span aria-hidden="true">·</span>
          <span>Klik Nama Program untuk Rincian</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111816]">
          Sheet 3 — Matriks Perbandingan Perusahaan Kelapa Sawit
        </h1>
        <p className="text-sm text-[#4B5953] leading-relaxed">
          Perbandingan langsung seluruh 16 dimensi wajib: durasi, fisik, mental &amp; disiplin,
          leadership, teamwork, teknis kebun, teknis pabrik, sustainability, K3, praktik lapangan,
          rotasi, mentoring, assessment, hingga kelengkapan sumber. Geser horizontal untuk melihat
          seluruh kolom.
        </p>
      </section>

      {/* Company Filter Bar */}
      <section className="flex flex-wrap items-center justify-between gap-4 bg-white border border-[#E2E7E4] rounded-lg p-4">
        <div className="flex flex-wrap items-center gap-1.5 bg-[#F1F3F2] p-1 rounded-md">
          <button
            type="button"
            onClick={() => setSelectedCompany('ALL')}
            className={`px-3 py-1.5 text-xs font-medium rounded-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#14532D] ${
              selectedCompany === 'ALL'
                ? 'bg-white text-[#111816] shadow-2xs'
                : 'text-[#4B5953] hover:text-[#111816]'
            }`}
          >
            Semua Perusahaan ({comparisonRows.length})
          </button>
          {companies.map((c) => {
            const active = selectedCompany === c.id;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setSelectedCompany(c.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#14532D] ${
                  active
                    ? 'bg-white text-[#111816] shadow-2xs'
                    : 'text-[#4B5953] hover:text-[#111816]'
                }`}
              >
                {c.shortName}
              </button>
            );
          })}
        </div>

        <span className="text-xs font-mono-tabular text-[#64746D]">
          {filteredRows.length} baris · 16 kolom
        </span>
      </section>

      {/* 16-Column Matrix */}
      <div className="bg-white border border-[#E2E7E4] rounded-lg overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[2350px]">
          <thead>
            <tr className="border-b border-[#E2E7E4] bg-[#F8FAF9] text-xs font-semibold text-[#4B5953]">
              <th className="py-3 px-3 w-40 sticky left-0 z-10 bg-[#F8FAF9] border-r border-[#E2E7E4]">
                Perusahaan
              </th>
              <th className="py-3 px-3 w-52">Nama Program</th>
              <th className="py-3 px-3 w-44">Durasi</th>
              <th className="py-3 px-3 w-44">Kegiatan Fisik</th>
              <th className="py-3 px-3 w-44">Mental &amp; Disiplin</th>
              <th className="py-3 px-3 w-44">Leadership</th>
              <th className="py-3 px-3 w-40">Teamwork</th>
              <th className="py-3 px-3 w-44">Teknis Kebun</th>
              <th className="py-3 px-3 w-44">Teknis Pabrik</th>
              <th className="py-3 px-3 w-44">Sustainability</th>
              <th className="py-3 px-3 w-44">K3</th>
              <th className="py-3 px-3 w-44">Praktik Lapangan</th>
              <th className="py-3 px-3 w-44">Rotasi</th>
              <th className="py-3 px-3 w-44">Mentoring</th>
              <th className="py-3 px-3 w-44">Assessment</th>
              <th className="py-3 px-3 w-32">Kelengkapan</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E2E7E4] text-sm">
            {filteredRows.map((row) => {
              const prog = programMap.get(row.programId);
              const statusTone =
                row.sourceCompleteness === 'Terverifikasi'
                  ? 'text-[#14532D] font-semibold'
                  : row.sourceCompleteness === 'Informasi Sebagian'
                    ? 'text-[#B45309] font-semibold'
                    : 'text-[#64746D]';

              return (
                <tr
                  key={row.programId}
                  className="hover:bg-[#F8FAF9] transition-colors align-top"
                >
                  <td className="py-3.5 px-3 text-xs font-semibold text-[#111816] sticky left-0 z-10 bg-white border-r border-[#E2E7E4]">
                    {row.companyShortName}
                  </td>
                  <td className="py-3.5 px-3">
                    {prog ? (
                      <button
                        type="button"
                        onClick={() => onSelectProgram(prog)}
                        className="text-left text-xs font-semibold text-[#14532D] hover:underline leading-relaxed cursor-pointer focus-visible:outline-2 focus-visible:outline-[#14532D]"
                      >
                        {row.programName}
                      </button>
                    ) : (
                      <span className="text-xs font-semibold text-[#111816]">
                        {row.programName}
                      </span>
                    )}
                  </td>
                  <td className="py-3.5 px-3 text-xs font-medium text-[#111816] leading-relaxed">
                    {row.duration}
                  </td>
                  <td className="py-3.5 px-3">{renderCell(row.physical)}</td>
                  <td className="py-3.5 px-3">{renderCell(row.mentalDiscipline)}</td>
                  <td className="py-3.5 px-3">{renderCell(row.leadership)}</td>
                  <td className="py-3.5 px-3">{renderCell(row.teamwork)}</td>
                  <td className="py-3.5 px-3">{renderCell(row.estateTechnical)}</td>
                  <td className="py-3.5 px-3">{renderCell(row.millTechnical)}</td>
                  <td className="py-3.5 px-3">{renderCell(row.sustainability)}</td>
                  <td className="py-3.5 px-3">{renderCell(row.k3)}</td>
                  <td className="py-3.5 px-3">{renderCell(row.fieldPractice)}</td>
                  <td className="py-3.5 px-3">{renderCell(row.rotation)}</td>
                  <td className="py-3.5 px-3">{renderCell(row.mentoring)}</td>
                  <td className="py-3.5 px-3">{renderCell(row.assessment)}</td>
                  <td className={`py-3.5 px-3 text-xs ${statusTone}`}>
                    {row.sourceCompleteness}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
