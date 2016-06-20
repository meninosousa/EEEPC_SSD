EESchema Schematic File Version 2
LIBS:power
LIBS:device
LIBS:transistors
LIBS:conn
LIBS:linear
LIBS:regul
LIBS:74xx
LIBS:cmos4000
LIBS:adc-dac
LIBS:memory
LIBS:xilinx
LIBS:microcontrollers
LIBS:dsp
LIBS:microchip
LIBS:analog_switches
LIBS:motorola
LIBS:texas
LIBS:intel
LIBS:audio
LIBS:interface
LIBS:digital-audio
LIBS:philips
LIBS:display
LIBS:cypress
LIBS:siliconi
LIBS:opto
LIBS:atmel
LIBS:contrib
LIBS:valves
LIBS:eeepc_ssd
EELAYER 25 0
EELAYER END
$Descr A4 11693 8268
encoding utf-8
Sheet 1 1
Title ""
Date "22 oct 2014"
Rev ""
Comp ""
Comment1 ""
Comment2 ""
Comment3 ""
Comment4 ""
$EndDescr
$Comp
L USATA CN8
U 1 1 53E0E90C
P 6800 3000
F 0 "CN8" H 6875 3050 60  0000 C CNN
F 1 "USATA" H 7325 1125 60  0000 C CNN
F 2 "" H 6800 3000 60  0000 C CNN
F 3 "" H 6800 3000 60  0000 C CNN
	1    6800 3000
	1    0    0    -1  
$EndComp
NoConn ~ 6500 4250
NoConn ~ 6500 4350
NoConn ~ 6500 4450
NoConn ~ 6500 4650
NoConn ~ 6500 4750
Text GLabel 6500 4150 0    60   Input ~ 0
GND
Text GLabel 6500 4050 0    60   Input ~ 0
GND
Text GLabel 6500 3650 0    60   Input ~ 0
GND
Text GLabel 6500 3350 0    60   Input ~ 0
GND
Text GLabel 6500 3050 0    60   Input ~ 0
GND
Text GLabel 6500 3150 0    60   Input ~ 0
A+
Text GLabel 6500 3250 0    60   Input ~ 0
A-
Text GLabel 6500 3450 0    60   Input ~ 0
B-
Text GLabel 6500 3550 0    60   Input ~ 0
B+
Text GLabel 6500 3850 0    60   Input ~ 0
+3.3V
Text GLabel 6500 3950 0    60   Input ~ 0
+3.3V
$Comp
L CONN1 CN1
U 1 1 5767D520
P 3675 3400
F 0 "CN1" H 4025 3350 60  0000 C CNN
F 1 "B+" H 3800 3350 60  0000 C CNN
F 2 "" H 3675 3400 60  0000 C CNN
F 3 "" H 3675 3400 60  0000 C CNN
	1    3675 3400
	-1   0    0    1   
$EndComp
$Comp
L CONN1 CN2
U 1 1 5767DBCF
P 3675 3500
F 0 "CN2" H 4025 3450 60  0000 C CNN
F 1 "B-" H 3800 3450 60  0000 C CNN
F 2 "" H 3675 3500 60  0000 C CNN
F 3 "" H 3675 3500 60  0000 C CNN
	1    3675 3500
	-1   0    0    1   
$EndComp
$Comp
L CONN1 CN3
U 1 1 5767DBF0
P 3675 3600
F 0 "CN3" H 4025 3550 60  0000 C CNN
F 1 "GND" H 3800 3550 60  0000 C CNN
F 2 "" H 3675 3600 60  0000 C CNN
F 3 "" H 3675 3600 60  0000 C CNN
	1    3675 3600
	-1   0    0    1   
$EndComp
$Comp
L CONN1 CN4
U 1 1 5767DC16
P 3675 3700
F 0 "CN4" H 4025 3650 60  0000 C CNN
F 1 "A-" H 3800 3650 60  0000 C CNN
F 2 "" H 3675 3700 60  0000 C CNN
F 3 "" H 3675 3700 60  0000 C CNN
	1    3675 3700
	-1   0    0    1   
$EndComp
$Comp
L CONN1 CN5
U 1 1 5767DC3F
P 3675 3800
F 0 "CN5" H 4025 3750 60  0000 C CNN
F 1 "A+" H 3800 3750 60  0000 C CNN
F 2 "" H 3675 3800 60  0000 C CNN
F 3 "" H 3675 3800 60  0000 C CNN
	1    3675 3800
	-1   0    0    1   
$EndComp
$Comp
L CONN1 CN6
U 1 1 5767DC65
P 3675 3900
F 0 "CN6" H 4025 3850 60  0000 C CNN
F 1 "GND" H 3800 3850 60  0000 C CNN
F 2 "" H 3675 3900 60  0000 C CNN
F 3 "" H 3675 3900 60  0000 C CNN
	1    3675 3900
	-1   0    0    1   
$EndComp
$Comp
L CONN1 CN7
U 1 1 5767DC98
P 3675 4000
F 0 "CN7" H 4025 3950 60  0000 C CNN
F 1 "+3.3V" H 3800 3950 60  0000 C CNN
F 2 "" H 3675 4000 60  0000 C CNN
F 3 "" H 3675 4000 60  0000 C CNN
	1    3675 4000
	-1   0    0    1   
$EndComp
Text GLabel 3875 3850 2    60   Input ~ 0
GND
Text GLabel 3875 3550 2    60   Input ~ 0
GND
Text GLabel 3875 3750 2    60   Input ~ 0
A+
Text GLabel 3875 3650 2    60   Input ~ 0
A-
Text GLabel 3875 3450 2    60   Input ~ 0
B-
Text GLabel 3875 3350 2    60   Input ~ 0
B+
Text GLabel 3875 3950 2    60   Input ~ 0
+3.3V
$EndSCHEMATC
