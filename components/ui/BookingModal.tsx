"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";
import { cn } from "@/lib/utils";

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
    const [step, setStep] = useState(1);
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", topic: "" });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const times = [
        "10:00 AM", "11:00 AM", "12:00 PM",
        "02:00 PM", "03:00 PM", "04:00 PM",
        "05:00 PM", "06:00 PM"
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setIsSubmitted(true);
        }, 1200);
    };

    const resetForm = () => {
        setIsSubmitted(false);
        setStep(1);
        setSelectedDate(undefined);
        setSelectedTime(null);
        setFormData({ name: "", email: "", phone: "", topic: "" });
        onClose();
    };

    const css = `
        .modern-calendar .rdp { 
            --rdp-cell-size: 44px; 
            --rdp-accent-color: #3B82F6; 
            margin: 0;
            width: 100%;
        }
        .modern-calendar .rdp-months {
            width: 100%;
            justify-content: center;
        }
        .modern-calendar .rdp-month { 
            width: 100%;
        }
        .modern-calendar .rdp-table { 
            width: 100%;
            max-width: 100%;
        }
        .modern-calendar .rdp-caption {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 4px 16px;
        }
        .modern-calendar .rdp-caption_label { 
            color: #fff; 
            font-size: 15px; 
            font-weight: 600;
        }
        .modern-calendar .rdp-nav {
            display: flex;
            gap: 4px;
        }
        .modern-calendar .rdp-nav_button { 
            color: #888;
            border-radius: 8px;
            width: 36px;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .modern-calendar .rdp-nav_button:hover { 
            color: #fff; 
            background: rgba(255,255,255,0.1);
        }
        .modern-calendar .rdp-head_cell { 
            color: #666; 
            font-weight: 600; 
            font-size: 12px;
            text-transform: uppercase;
            padding-bottom: 8px;
        }
        .modern-calendar .rdp-tbody {
            
        }
        .modern-calendar .rdp-day { 
            color: #999; 
            border-radius: 10px; 
            transition: all 0.15s;
            font-size: 14px;
            font-weight: 500;
            width: 44px;
            height: 44px;
        } 
        .modern-calendar .rdp-day:hover:not([disabled]):not(.rdp-day_selected) { 
            background: rgba(59, 130, 246, 0.15);
            color: #fff;
        }
        .modern-calendar .rdp-day_selected { 
            background: #3B82F6 !important; 
            color: #fff !important; 
            font-weight: 600;
        }
        .modern-calendar .rdp-day_today:not(.rdp-day_selected) {
            color: #3B82F6;
            font-weight: 600;
        }
        .modern-calendar .rdp-day_disabled { opacity: 0.25; cursor: not-allowed; }
        .modern-calendar .rdp-day_outside { opacity: 0.2; }
    `;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <style>{css}</style>

                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                            mass: 1
                        }}
                        className="fixed inset-0 z-[101] flex items-center justify-center p-4"
                    >
                        <div
                            className="w-full max-w-[420px] bg-[#111] rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header */}
                            <div className="p-5 border-b border-white/10">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h2 className="text-xl font-bold text-white mb-1">
                                            {isSubmitted ? "Booking Confirmed" : "Schedule a Call"}
                                        </h2>
                                        {!isSubmitted && (
                                            <p className="text-sm text-gray-500">30 min discovery call • Free</p>
                                        )}
                                    </div>
                                    <button
                                        onClick={onClose}
                                        className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 hover:text-white hover:bg-white/10 transition-colors -mt-1 -mr-1"
                                    >
                                        <X size={18} />
                                    </button>
                                </div>

                                {/* Step Pills */}
                                {!isSubmitted && (
                                    <div className="flex gap-2 mt-4">
                                        <button
                                            onClick={() => setStep(1)}
                                            className={cn(
                                                "flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all",
                                                step === 1
                                                    ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                                                    : "bg-white/5 text-gray-500 border border-transparent hover:bg-white/10"
                                            )}
                                        >
                                            1. Pick a Time
                                        </button>
                                        <button
                                            disabled={!selectedDate || !selectedTime}
                                            onClick={() => selectedDate && selectedTime && setStep(2)}
                                            className={cn(
                                                "flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all",
                                                step === 2
                                                    ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                                                    : "bg-white/5 text-gray-500 border border-transparent",
                                                (!selectedDate || !selectedTime) && "opacity-50 cursor-not-allowed"
                                            )}
                                        >
                                            2. Details
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <AnimatePresence mode="wait">
                                    {isSubmitted ? (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                            className="text-center py-6"
                                        >
                                            <motion.div
                                                initial={{ scale: 0, rotate: -180 }}
                                                animate={{ scale: 1, rotate: 0 }}
                                                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                                                className="w-16 h-16 mx-auto mb-5 rounded-full bg-green-500 flex items-center justify-center"
                                            >
                                                <CheckCircle size={32} className="text-white" />
                                            </motion.div>
                                            <h3 className="text-xl font-bold text-white mb-2">You're all set!</h3>
                                            <p className="text-gray-500 text-sm mb-6">
                                                We've sent details to {formData.email}
                                            </p>
                                            <div className="inline-flex items-center gap-4 px-5 py-3 bg-white/5 rounded-xl text-sm text-gray-300 mb-6">
                                                <span className="flex items-center gap-2">
                                                    <Calendar size={16} className="text-blue-400" />
                                                    {selectedDate ? format(selectedDate, "MMM d, yyyy") : ""}
                                                </span>
                                                <span className="text-gray-600">•</span>
                                                <span className="flex items-center gap-2">
                                                    <Clock size={16} className="text-blue-400" />
                                                    {selectedTime}
                                                </span>
                                            </div>
                                            <button
                                                onClick={resetForm}
                                                className="w-full py-3.5 rounded-xl bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors"
                                            >
                                                Done
                                            </button>
                                        </motion.div>
                                    ) : step === 1 ? (
                                        <motion.div
                                            key="step1"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                                            className="space-y-5"
                                        >
                                            {/* Calendar */}
                                            <div className="modern-calendar bg-white/[0.02] rounded-xl p-4 border border-white/5">
                                                <DayPicker
                                                    mode="single"
                                                    selected={selectedDate}
                                                    onSelect={setSelectedDate}
                                                    disabled={{ before: new Date() }}
                                                    showOutsideDays={false}
                                                />
                                            </div>

                                            {/* Time Slots */}
                                            <div>
                                                <p className="text-xs text-gray-500 uppercase tracking-wider mb-3 font-medium">
                                                    Available Times (IST)
                                                </p>
                                                <div className="grid grid-cols-4 gap-2">
                                                    {times.map((time) => (
                                                        <button
                                                            key={time}
                                                            type="button"
                                                            disabled={!selectedDate}
                                                            onClick={() => setSelectedTime(time)}
                                                            className={cn(
                                                                "py-2.5 rounded-lg text-xs font-medium transition-all",
                                                                !selectedDate
                                                                    ? "bg-white/5 text-gray-600 cursor-not-allowed"
                                                                    : selectedTime === time
                                                                        ? "bg-blue-500 text-white"
                                                                        : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                                                            )}
                                                        >
                                                            {time}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Continue */}
                                            <button
                                                onClick={() => setStep(2)}
                                                disabled={!selectedDate || !selectedTime}
                                                className={cn(
                                                    "w-full py-3.5 rounded-xl font-semibold transition-all flex items-center justify-center gap-2",
                                                    !selectedDate || !selectedTime
                                                        ? "bg-white/10 text-gray-500 cursor-not-allowed"
                                                        : "bg-blue-500 text-white hover:bg-blue-600"
                                                )}
                                            >
                                                Continue
                                                <ArrowRight size={16} />
                                            </button>
                                        </motion.div>
                                    ) : (
                                        <motion.form
                                            key="step2"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 20 }}
                                            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                                            onSubmit={handleSubmit}
                                            className="space-y-4"
                                        >
                                            {/* Summary */}
                                            <div className="flex items-center justify-between py-3 px-4 bg-blue-500/10 rounded-xl border border-blue-500/20">
                                                <div className="flex items-center gap-2 text-sm text-white">
                                                    <Calendar size={16} className="text-blue-400" />
                                                    <span className="font-medium">
                                                        {selectedDate ? format(selectedDate, "EEE, MMM d") : ""} at {selectedTime}
                                                    </span>
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={() => setStep(1)}
                                                    className="text-xs text-blue-400 hover:text-blue-300"
                                                >
                                                    Change
                                                </button>
                                            </div>

                                            {/* Form */}
                                            <div className="space-y-3">
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder="Your name"
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    className="w-full py-3 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500/50 text-sm"
                                                />
                                                <input
                                                    required
                                                    type="email"
                                                    placeholder="Email address"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    className="w-full py-3 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500/50 text-sm"
                                                />
                                                <input
                                                    required
                                                    type="tel"
                                                    placeholder="Phone number"
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                    className="w-full py-3 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500/50 text-sm"
                                                />
                                                <textarea
                                                    rows={2}
                                                    placeholder="What would you like to discuss? (optional)"
                                                    value={formData.topic}
                                                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                                                    className="w-full py-3 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500/50 resize-none text-sm"
                                                />
                                            </div>

                                            {/* Actions */}
                                            <div className="flex gap-3 pt-1">
                                                <button
                                                    type="button"
                                                    onClick={() => setStep(1)}
                                                    className="px-4 py-3.5 rounded-xl text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
                                                >
                                                    <ArrowLeft size={18} />
                                                </button>
                                                <button
                                                    type="submit"
                                                    disabled={isLoading}
                                                    className="flex-1 py-3.5 rounded-xl font-semibold bg-blue-500 text-white hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                                                >
                                                    {isLoading ? (
                                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                    ) : (
                                                        "Confirm Booking"
                                                    )}
                                                </button>
                                            </div>
                                        </motion.form>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
