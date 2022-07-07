## Getting Started

This shows how to build a Python 3 developing environment in Linux with vim as editor.

![Developing Environment](/home/christophe/Github/pywiki/public/assets/DevelopingEnvironment.png)

### Install Arch Linux

Reference: https://wiki.archlinux.org/title/installation_guide

#### Preparing installation medium

Download the latest Arch Linux ISO file:

```
$ wget https://geo.mirror.pkgbuild.com/iso/latest/archlinux-x86_64.iso
```

(Optional) Verify GPG signature:

```
$ wget https://geo.mirror.pkgbuild.com/iso/latest/archlinux-x86_64.iso.sig
$ gpg --keyserver-options auto-key-retrieve --verify archlinux-x86_64.iso.sig
```

Expected outcome:

```
gpg: assuming signed data in 'archlinux-x86_64.iso'
gpg: Signature made Fri 01 Jul 2022 09:23:08 AM EDT
gpg:                using RSA key 4AA4767BBC9C4B1D18AE28B77F2D434B9741E8AC
gpg:                issuer "pierre@archlinux.de"
gpg: key 7F2D434B9741E8AC: public key "Pierre Schmitz <pierre@archlinux.de>" imported
gpg: Total number processed: 1
gpg:               imported: 1
gpg: marginals needed: 3  completes needed: 1  trust model: pgp
gpg: depth: 0  valid:   2  signed:   0  trust: 0-, 0q, 0n, 0m, 0f, 2u
gpg: Good signature from "Pierre Schmitz <pierre@archlinux.de>" [unknown]
gpg: WARNING: This key is not certified with a trusted signature!
gpg:          There is no indication that the signature belongs to the owner.
Primary key fingerprint: 4AA4 767B BC9C 4B1D 18AE  28B7 7F2D 434B 9741 E8AC
```

Flash it to USB drive **(Replace `sdx`** with your USB medium label):

```
// Find your USB drive label
$ sudo fdisk -l

// Flashing iso file
$ sudo dd bs=4M if=archlinux-x86_64.iso of=/dev/sdx conv=fsync oflag=direct status=progress
```

#### Boot to USB Medium

Press `del` or `F12` (depends on your BIOS) and choose boot to USB Medium (UEFI)

Select "Arch Linux install medium (x86_64, UEFI)"

#### Connect to internet

```
// If using ethernet
root@archiso ~ # ip link

// Or if using wireless
root@archiso ~ # iwctl
[iwd]# device list
[iwd]# station (your device name) scan
[iwd]# station (your device name) get-networks
[iwd]# station (your device name) connect (your WiFi name)
[iwd]# exit

// Test internet connection
root@archiso ~ # ping -c 4 www.github.com

// update system clock
root@archiso ~ # timedatectl set-ntp true
```

#### Partition the disks

Run `fdisk -l` shows your current partition table:

```
root@archiso ~ # fdisk -l
Disk /dev/nvme0n1: 931.51 GiB, 1000204886016 bytes, 1953525168 sectors
Disk model: Samsung SSD 980 PRO 1TB
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt
Disk identifier: A634ED1F-C892-4290-94A7-B88319484A5C

Device              Start        End    Sectors   Size Type
/dev/nvme0n1p1       2048     206847     204800   100M EFI System
/dev/nvme0n1p2     206848     239615      32768    16M Microsoft reserved
/dev/nvme0n1p3     239616 1952284671 1952045056 930.8G Microsoft basic data
/dev/nvme0n1p4 1952284672 1953521663    1236992   604M Windows recovery environment


Disk /dev/nvme1n1: 931.51 GiB, 1000204886016 bytes, 1953525168 sectors
Disk model: Samsung SSD 980 1TB
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 16384 bytes / 131072 bytes
Disklabel type: gpt
Disk identifier: EBA0770A-D6AA-8D46-B34C-B268E33D3F74

Device              Start        End Sectors  Size Type
/dev/nvme1n1p1       2048     206847  204800  100M EFI System
/dev/nvme1n1p2     206848     239615   32768   16M Microsoft reserved
/dev/nvme1n1p3 1952284672 1953521663 1236992  604M Windows recovery environment


Disk /dev/sda: 57.8 GiB, 62058921984 bytes, 121208832 sectors
Disk model: DataTraveler 3.0
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: dos
Disk identifier: 0x2a588529

Device     Boot   Start     End Sectors  Size Id Type
/dev/sda1  *         64 1601535 1601472  782M  0 Empty
/dev/sda2       1601536 1628159   26624   13M ef EFI (FAT-12/16/32)


Disk /dev/loop0: 689.79 MiB, 723292160 bytes, 1412680 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
```

Here I'm using `/dev/nvme1n1` (entire disk) to install Arch Linux:

```
root@archiso ~ # fdisk /dev/nvme1n1

Welcome to fdisk (util-linux 2.38).
Changes will remain in memory only, until you decide to write them.
Be careful before using the write command.


Command (m for help): g
Created a new GPT disklabel (GUID: 3D6B520A-6D36-4248-885B-D571479A692E).

Command (m for help): n
Partition number (1-128, default 1):
First sector (2048-1953525134, default 2048):
Last sector, +/-sectors or +/-size{K,M,G,T,P} (2048-1953525134, default 1953523711): +512M

Created a new partition 1 of type 'Linux filesystem' and of size 512 MiB.
Partition #1 contains a vfat signature.

Do you want to remove the signature? [Y]es/[N]o: Y

The signature will be removed by a write command.

Command (m for help): n
Partition number (2-128, default 2):
First sector (1050624-1953525134, default 1050624):
Last sector, +/-sectors or +/-size{K,M,G,T,P} (1050624-1953525134, default 1953523711):

Created a new partition 2 of type 'Linux filesystem' and of size 931 GiB.

Command (m for help): p
Disk /dev/nvme1n1: 931.51 GiB, 1000204886016 bytes, 1953525168 sectors
Disk model: Samsung SSD 980 1TB
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 16384 bytes / 131072 bytes
Disklabel type: gpt
Disk identifier: 3D6B520A-6D36-4248-885B-D571479A692E

Device           Start        End    Sectors  Size Type
/dev/nvme1n1p1    2048    1050623    1048576  512M Linux filesystem
/dev/nvme1n1p2 1050624 1953523711 1952473088  931G Linux filesystem

Filesystem/RAID signature on partition 1 will be wiped.

Command (m for help): w
The partition table has been altered.
Calling ioctl() to re-read partition table.
Syncing disks.
```

Format the partitions:

```
root@archiso ~ # mkfs.fat -F 32 /dev/nvme1n1p1
mkfs.fat 4.2 (2021-01-31)
root@archiso ~ # mkfs.ext4 /dev/nvme1n1p2
mke2fs 1.46.5 (30-Dec-2021)
Discarding device blocks: done
Creating filesystem with 244059136 4k blocks and 61022208 inodes
Filesystem UUID: 8f3de9de-218a-49de-a73d-c72b74b9dadf
Superblock backups stored on blocks:
	32768, 98304, 163840, 229376, 294912, 819200, 884736, 1605632, 2654208,
	4096000, 7962624, 11239424, 20480000, 23887872, 71663616, 78675968,
	102400000, 214990848

Allocating group tables: done
Writing inode tables: done
Creating journal (262144 blocks): done
Writing superblocks and filesystem accounting information: done
```

#### Mount the file systems and Installation

Mount root and EFI partition:

```
root@archiso ~ # mount /dev/nvme1n1p2 /mnt
root@archiso ~ # mount --mkdir /dev/nvme1n1p1 /mnt/boot
```

Install essential packages:

```
root@archiso ~ # pacstrap /mnt base base-devel linux-lts linux-firmware neovim networkmanager grub efibootmgr os-prober ntfs-3g
```

#### Configure the system

```
root@archiso ~ # genfstab -U /mnt >> /mnt/etc/fstab
root@archiso ~ # arch-chroot /mnt
[root@archiso /]# ln -sf /usr/share/zoneinfo/America/Toronto /etc/localtime
[root@archiso /]# hwclock --systohc
```

Edit `/etc/locale.gen` and uncomment `en_CA.UTF-8 UTF-8` and other needed locales.

```
[root@archiso /]# nvim /etc/locale.gen
```

Generate the locales by running:

```
[root@archiso /]# locale-gen
[root@archiso /]# echo "LANG=en_US.UTF-8" > /etc/locale.conf
```

Host name (replace `ArchLinux` with any string (NO space):

```
[root@archiso /]# echo "ArchLinux" > /etc/hostname
[root@archiso /]# mkinitcpio -P
```

Set the root password (you will not be able to see it on screen):

```
[root@archiso /]# passwd
```

Boot loader:

```
[root@archiso /]# grub-install --target=x86_64-efi --efi-directory=/boot --bootloader-id=GRUB
Installing for x86_64-efi platform.
Installation finished. No error reported.

// If have Windows OS
// Go to the last line and uncomment GRUB_DISABLE_OS_PROBER=false
[root@archiso /]# nvim /etc/default/grub

[root@archiso /]# grub-mkconfig -o /boot/grub/grub.cfg
Generating grub configuration file ...
Found linux image: /boot/vmlinuz-linux
Found initrd image: /boot/initramfs-linux.img
Found fallback initrd image(s) in /boot:  initramfs-linux-fallback.img
Warning: os-prober will be executed to detect other bootable partitions.
Its output will be used to detect bootable binaries on them and create new boot entries.
grub-probe: error: cannot find a GRUB drive for /dev/sda1.  Check your device.map.
Found Windows Boot Manager on /dev/nvme0n1p1@/efi/Microsoft/Boot/bootmgfw.efi
Adding boot menu entry for UEFI Firmware Settings ...
done
```

#### Reboot

```
[root@archiso /]# exit
root@archiso ~ # umount -R /mnt
root@archiso ~ # reboot
```

**Remember remove the USB medium.**

### Setting up Arch Linux

#### Add a regular user

```
[root@ArchLinux ~]# useradd -m christophe
[root@ArchLinux ~]# passwd christophe

// add "christophe ALL=(ALL:ALL) NOPASSWD: ALL" to sudoers file
[root@ArchLinux ~]# nvim /etc/sudoers

[root@ArchLinux ~]# sh christophe
```

#### Connect to internet

```
[christophe@ArchLinux ~]$ sudo systemctl start NetworkManager
[christophe@ArchLinux ~]$ sudo systemctl enable NetworkManager
[christophe@ArchLinux ~]$ nmtui
```

#### Change shell

```
[christophe@ArchLinux ~]$ sudo pacman -S zsh git
[christophe@ArchLinux ~]$ sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

#### Graphics

Identify the graphics card:

```
➜  ~ lspci -v | grep -A1 -e VGA -e 3D
01:00.0 VGA compatible controller: NVIDIA Corporation GA102 [GeForce RTX 3090] (rev a1) (prog-if 00 [VGA controller])
	Subsystem: ASUSTeK Computer Inc. Device 87af
```

For NVIDIA card:

```
➜  ~ sudo pacman -S nvidia-lts nvidia-utils
➜  ~ sudo nvidia-xconfig
```

Install KDE desktop environment:

```
➜  ~ sudo pacman -S plasma-desktop sddm
```

