#!/usr/bin/env python3
"""
Simple Multi-Threaded Port Scanner
----------------------------------
Author: Sk. Sahoo
Description: A fast tool to scan open ports on a target server using threading.
Usage: python3 port-scanner.py -t <target_ip> -p <start_port>-<end_port>
"""

import socket
import threading
import argparse
from datetime import datetime
from queue import Queue

# Lock for thread-safe printing
print_lock = threading.Lock()

def scan_port(target, port):
    """
    Attempts to connect to a specific port on the target.
    """
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        s.settimeout(1) # Timeout for speed
        
        # Returns 0 if connection is successful
        result = s.connect_ex((target, port))
        
        if result == 0:
            with print_lock:
                print(f"[+] Port {port} is OPEN")
        s.close()
        
    except Exception:
        pass

def worker():
    """
    Thread worker function to process ports from the queue.
    """
    while True:
        port = queue.get()
        scan_port(target, port)
        queue.task_done()

# --- Main Execution ---
if __name__ == "__main__":
    # 1. Parse Arguments
    parser = argparse.ArgumentParser(description="Multi-Threaded Port Scanner")
    parser.add_argument("-t", "--target", help="Target IP address", required=True)
    parser.add_argument("-p", "--ports", help="Port range (e.g., 1-1024)", default="1-1024")
    args = parser.parse_args()

    # 2. Resolve Target
    target = args.target
    start_port, end_port = map(int, args.ports.split('-'))
    
    print("-" * 50)
    print(f"Scanning Target: {target}")
    print(f"Time Started: {datetime.now()}")
    print("-" * 50)

    # 3. Setup Queue and Threads
    queue = Queue()
    
    # Create 100 threads for speed
    for _ in range(100):
        t = threading.Thread(target=worker)
        t.daemon = True
        t.start()

    # 4. Fill Queue
    for port in range(start_port, end_port + 1):
        queue.put(port)

    # 5. Wait for completion
    queue.join()
    print("\nScan Completed.")